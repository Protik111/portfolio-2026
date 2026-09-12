import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve conflicting Tailwind utility
 * classes (e.g. `absolute` vs `fixed`) in favor of the one passed last.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
