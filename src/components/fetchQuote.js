export async function fetchQuote() {
  let response = await fetch('https://api.quotable.io/random?minLength=50&maxLength=80');
  let data = await response.json();
  return joinQuoteAndAuthor(data.content, data.author);
}

function joinQuoteAndAuthor(quote, author) {
  return `${quote.toUpperCase()} —${author.toUpperCase()}`;
}