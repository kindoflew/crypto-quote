export async function fetchQuote() {
  let response = await fetch('https://api.quotable.io/random?minLength=50&maxLength=80');
  let data = await response.json();
  return `${data.content.toUpperCase()} — ${data.author.toUpperCase()}`;
}