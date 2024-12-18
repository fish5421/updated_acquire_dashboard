import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  if (isNaN(value)) return 'N/A';
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function calculateFinancialRatio(numerator: number, denominator: number): string {
  const num = Number(numerator);
  const den = Number(denominator);

  if (den === 0 || isNaN(den) || !isFinite(den)) {
    return 'N/A';
  }

  const ratio = num / den;
  if (isNaN(ratio) || !isFinite(ratio)) {
    return 'N/A';
  }

  return ratio.toFixed(2) + 'x';
}

export function calculateFinancialRatioAsNumber(numerator: number | string, denominator: number | string): number | null {
  const num = typeof numerator === 'string' ? parseFloat(numerator.replace(/[^0-9.-]+/g, "")) : numerator;
  const den = typeof denominator === 'string' ? parseFloat(denominator.replace(/[^0-9.-]+/g, "")) : denominator;
  
  if (isNaN(num) || isNaN(den) || den === 0 || !isFinite(num / den)) {
    return null;
  }
  return num / den;
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
}

export function formatRatio(value: number | null): string {
  if (value === null) {
    return 'N/A';
  }
  return value.toFixed(2) + 'x';
}