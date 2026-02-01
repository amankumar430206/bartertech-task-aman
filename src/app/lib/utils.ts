import { format, parseISO } from "date-fns";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatCurrency(amount: number | string, currency: string = "$", locale: string = "en-US"): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num)) return `${currency}0.00`;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency === "$" ? "USD" : currency, // fallback to USD if only symbol given
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
  // Alternative simpler version if you just want to keep the symbol:
  // return `${currency}${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

/**
 * Formats ISO date string to readable format
 * Example: formatDate("2025-01-19T03:13:10.103Z") → "Jan 19, 2025"
 */
export function formatDate(dateString: string, dateFormat: string = "MMM d, yyyy"): string {
  try {
    return format(parseISO(dateString), dateFormat);
  } catch (error) {
    return "Invalid date";
  }
}

/**
 * Formats date + time
 * Example: formatDateTime("2025-01-19T03:13:10.103Z") → "Jan 19, 2025 03:13 AM"
 */
export function formatDateTime(dateString: string, formatStr: string = "MMM d, yyyy hh:mm a"): string {
  try {
    return format(parseISO(dateString), formatStr);
  } catch {
    return "Invalid date";
  }
}

/**
 * Truncates text with ellipsis if longer than maxLength
 */
export function truncate(text: string, maxLength: number = 24, ellipsis: string = "..."): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/**
 * Simple delay helper (useful in testing or debouncing visuals)
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Calculate percentage safely (avoid division by zero)
 */
export function safePercentage(part: number, total: number, decimals = 1): string {
  if (total === 0) return "0%";
  return ((part / total) * 100).toFixed(decimals) + "%";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
