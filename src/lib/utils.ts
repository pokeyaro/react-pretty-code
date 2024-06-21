import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(relativePath: string): string {
  const isDev = process.env.NODE_ENV === 'development';
  // In development, use the full path based on Vite serve root
  if (isDev) {
    return `/node_modules/react-pretty-code/dist/assets/${relativePath}`;
  }
  // In production, use the relative path for the published package
  return `/assets/${relativePath}`;
}
