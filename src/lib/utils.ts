import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(value: number) {
  return `₹${value.toLocaleString('en-IN')}`;
}

export function waLink(phone: string, text?: string) {
  const base = `https://wa.me/91${phone}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function titleCase(value: string) {
  return value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
