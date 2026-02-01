"use client";

import { useEffect, useRef } from "react";
import TransactionCard from "./TransactionCard";
import TransactionSkeleton from "./TransactionSkeleton";
import { Transaction } from "@/app/lib/api/types";

type Props = {
  transactions: Transaction[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
};

export default function TransactionList({
  transactions,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: Props) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <TransactionSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <TransactionCard key={tx.id} transaction={tx} />
      ))}

      {isFetchingNextPage && (
        <div className="py-6 flex justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
        </div>
      )}

      {transactions.length > 0 && !hasNextPage && (
        <div className="py-8 text-center text-gray-500">No more transactions</div>
      )}

      <div ref={observerRef} className="h-10" />
    </div>
  );
}
