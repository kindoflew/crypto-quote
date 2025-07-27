export async function fetchQuote() {
  const response = await fetch('https://quoteslate.vercel.app/api/quotes/random?minLength=50&maxLength=80');
  const data = await response.json();
  console.log('data: ', data)
  return `${data.quote.toUpperCase()} — ${data.author.toUpperCase()}`;
}