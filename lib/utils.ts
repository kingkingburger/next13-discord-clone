import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn은 tailwind에서 다이나믹 class를 지원하게 해주는 역할입니다.
// 변수에 비동기 식으로 className으로 지정할 수 있습니다. ex) axios.get(xx) 결과로 className 지정
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
