"use client"

type Quote = {
  id: number,
  quote: string,
  author: string,
}

type Props = {
  quote: Quote
}

export default function RandomQuoteCLient({
  quote,
}: Props) {
  return (
    <section>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </section>
  )
}