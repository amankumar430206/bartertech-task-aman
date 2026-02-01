"use client";

import { useState } from "react";
import { useTransactions } from "@/app/hooks/useTransactions";
import FilterBar from "@/app/components/filters/FilterBar";
import InsightsSummary from "@/app/components/insights/InsightsSummary";
import TransactionList from "@/app/components/transaction/TransactionList";
import { TransactionFilters } from "@/app/lib/api/types";

export default function DashboardPage() {
  const [filters, setFilters] = useState<TransactionFilters>({});

  const { transactions, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, aggregations } =
    useTransactions(filters);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Transaction Insights</h1>

        <FilterBar onChange={setFilters} />

        <InsightsSummary {...aggregations} />

        <TransactionList
          transactions={transactions}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </main>
  );
}
