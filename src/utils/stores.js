import { writable, derived } from "svelte/store";

export const quote = writable("");

export const answer = writable([]);

export const solved = derived([answer, quote], ([$answer, $quote]) => {
  if ($answer && $quote) {
    return $answer.join("") === $quote;
  } else {
    return false;
  }
});
