import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function alternatingChunks(arr) {
  let i = 0;
  let toggle = true;
  const rows = [];

  while (i < arr.length) {
    let chunkSize = toggle ? 3 : 3; // Alternate between 3 and 2 images per row
    rows.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
    toggle = !toggle;
  }
  return rows;
}
