import { Transaction, TransactionFilters } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchTransactions({
  page = 1,
  limit = 15,
  filters = {},
}: {
  page?: number;
  limit?: number;
  filters?: Partial<TransactionFilters>;
}): Promise<Transaction[]> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (filters.search) {
    params.append("name", filters.search); // mockapi supports filter by field
  }

  // MockAPI has limited filtering — we do client-side filtering for most fields
  const res = await fetch(`${BASE_URL}/transactions?${params.toString()}`);

  if (!res.ok) throw new Error("Failed to fetch transactions");

  const data: Transaction[] = await res.json();
  return data;
}
