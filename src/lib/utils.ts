import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(relativePath: string): string {
  return new URL(`../dist/assets/${relativePath}`, import.meta.url).href;
}
