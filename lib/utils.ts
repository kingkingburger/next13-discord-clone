import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn은 tailwind에서 다이나믹 class를 지원하게 해주는 역할입니다.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
