import RandomQuoteCLient from "./client";

type Quote = {
  id: number,
  quote: string,
  author: string,
}

export default async function RandomQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random", {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error("Failed fetch to Quote");
  };

  const quote: Quote = await res.json();

  return <RandomQuoteCLient quote={quote} />
}