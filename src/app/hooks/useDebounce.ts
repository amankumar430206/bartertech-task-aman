import { useEffect, useState } from "react";

/**
 * A simple React hook that debounces a value.
 * Returns the debounced value after the specified delay.
 *
 * @param value The value to debounce (usually from input)
 * @param delay Delay in milliseconds (default: 500ms)
 * @returns The debounced value
 *
 * @example
 * const [search, setSearch] = useState("");
 * const debouncedSearch = useDebounce(search, 600);
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel the timeout if value or delay changes before delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect when value or delay changes

  return debouncedValue;
}
