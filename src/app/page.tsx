"use client";

import { useState } from "react";
import { useTransactions } from "@/app/hooks/useTransactions";
import FilterBar from "@/app/components/filters/FilterBar";
import InsightsSummary from "@/app/components/insights/InsightsSummary";
import TransactionList from "@/app/components/transaction/TransactionList";
import { TransactionFilters } from "@/app/lib/api/types";

export default function DashboardPage() {
  const [filters, setFilters] = useState<TransactionFilters>({
    // default filters here if needed
  });

  const { transactions, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, aggregations, isError, error } =
    useTransactions(filters);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Transaction Insights</h1>
          <p className="mt-2 text-gray-600">View, filter, and analyze your financial transactions</p>
        </div>

        {/* Filters */}
        <FilterBar onChange={setFilters} />

        {/* Error state */}
        {isError && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-medium">Failed to load transactions</p>
            <p className="mt-1 text-sm">{(error as Error)?.message || "Unknown error"}</p>
          </div>
        )}

        {/* Loading or content */}
        {!isError && (
          <>
            {/* Aggregated insights */}
            <InsightsSummary
              totalTransactions={aggregations.totalTransactions}
              totalSuccessfulAmount={aggregations.totalSuccessfulAmount}
              successRate={aggregations.successRate}
              topCategory={aggregations.topCategory}
            />

            {/* Transaction list with infinite scroll */}
            <TransactionList
              transactions={transactions}
              isLoading={isLoading}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          </>
        )}
      </div>
    </main>
  );
}
