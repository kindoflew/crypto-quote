import { writable, derived } from "svelte/store";

export const answer = writable([]);

export const quote = writable("");

export const solved = derived([answer, quote], ([$answer, $quote]) => isSolved($answer, $quote));

function isSolved(a, q) {
  return a.join("") === q;
}