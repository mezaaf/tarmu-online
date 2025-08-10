import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getUserInitials(name?: string): string {
  if (!name || name.trim() === "") return "";

  const words = name.trim().split(/\s+/);
  const first = words[0]?.[0] ?? "";
  const second = words[1]?.[0] ?? "";

  return (first + second).toUpperCase();
}

export function normalizePhone(phone: string) {
  if (phone.startsWith("0")) {
    return "62" + phone.slice(1);
  }
  return phone;
}

export function getEducationYearNow() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (month < 7) {
    return `${year - 1}/${year}`;
  } else {
    return `${year}/${year + 1}`;
  }
}
