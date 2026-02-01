"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchTransactions } from "@/app/lib/api/mockapi";
import { Transaction, TransactionFilters } from "@/app/lib/api/types";

const LIMIT = 15;

export function useTransactions(filters: TransactionFilters) {
  const query = useInfiniteQuery({
    queryKey: ["transactions", filters],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await fetchTransactions({
        page: pageParam,
        limit: LIMIT,
        filters,
      });
      return { data, nextPage: pageParam + 1 };
    },
    getNextPageParam: (lastPage, allPages) => {
      // MockAPI doesn't tell us total count → stop when we get fewer items
      return lastPage.data.length === LIMIT ? lastPage.nextPage : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    staleTime: 3 * 60 * 1000,
  });

  const flatData = useMemo(() => query.data?.pages.flatMap((p) => p.data) ?? [], [query.data]);

  // ── Derived Aggregations ────────────────────────────────────────
  const aggregations = useMemo(() => {
    let totalAmount = 0;
    let successAmount = 0;
    let successCount = 0;
    const categoryMap = new Map<string, number>();

    for (const tx of flatData) {
      const amount = Number(tx.amount);
      if (isNaN(amount)) continue;

      totalAmount += amount;
      if (tx.status) {
        successAmount += amount;
        successCount++;
      }

      const current = categoryMap.get(tx.category) ?? 0;
      categoryMap.set(tx.category, current + amount);
    }

    const successRate = flatData.length > 0 ? ((successCount / flatData.length) * 100).toFixed(1) : "0.0";

    let topCategory = "—";
    let topAmount = 0;
    categoryMap.forEach((amt, cat) => {
      if (amt > topAmount) {
        topAmount = amt;
        topCategory = cat;
      }
    });

    return {
      totalTransactions: flatData.length,
      totalSuccessfulAmount: successAmount.toFixed(2),
      successRate,
      topCategory,
    };
  }, [flatData]);

  return {
    ...query,
    transactions: flatData,
    aggregations,
  };
}
