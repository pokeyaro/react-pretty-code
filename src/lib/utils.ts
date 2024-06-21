import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(relativePath: string): string {
  const baseUrl = new URL(import.meta.url).origin
  return `${baseUrl}/assets/${relativePath}`
}
