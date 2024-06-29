import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chooseTheme(sugar: number) {
  const mmol = sugar / 16;
  switch (true) {
    case mmol > 12:
      return "high";
    case mmol < 5:
      return "low";
    default:
      return "good";
  }
}
