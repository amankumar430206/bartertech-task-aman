"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import SearchInput from "@/app/components/filters/SearchInput";
import StatusMultiSelect from "@/app/components/filters/StatusMultiSelect";
import { TransactionFilters, TransactionStatus } from "@/app/lib/api/types";

type Props = {
  onChange: (filters: TransactionFilters) => void;
};

export default function FilterBar({ onChange }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<TransactionStatus[]>([]);

  // Debounce the search term
  const debouncedSearch = useDebounce(search, 450);

  // You can debounce other filters too if they are text-based
  useEffect(() => {
    onChange({
      search: debouncedSearch.trim() || undefined,
      status: status.length ? status : undefined,
      // category, date range, etc.
    });
  }, [debouncedSearch, status, onChange]);

  return (
    <div className="my-4 bg-white flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <SearchInput value={search} onChange={setSearch} placeholder="Search by name or ID..." />

      <StatusMultiSelect value={status} onChange={setStatus} />
    </div>
  );
}
