export interface Transaction {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  amount: string;
  currency: string;
  category: string;
  status: boolean;
}

export type TransactionStatus = "success" | "failed" | "pending";

export interface TransactionFilters {
  status?: TransactionStatus[];
  category?: string;
  startDate?: string;
  endDate?: string;
  search?: string;
}

export interface PaginatedTransactions {
  data: Transaction[];
  nextPage: number | null;
  hasMore: boolean;
}
