import { getRandomQuote } from "@/lib/quote";

import RandomQuoteCLient from "./client";

type Quote = {
  id: number,
  quote: string,
  author: string,
}

export default async function RandomQuote() {
  const quote = await getRandomQuote();

  return <RandomQuoteCLient initialQuote={quote} />
}