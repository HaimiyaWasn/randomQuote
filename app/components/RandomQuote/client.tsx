"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2"

type Quote = {
  id: number,
  quote: string,
  author: string,
}

type Props = {
  initialQuote: Quote
}

export default function RandomQuoteCLient({
  initialQuote,
}: Props) {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function randomQuote() {
    try {
      setLoading(true);

      const res = await fetch(`/api/random-quote`, {
        cache: "no-store",
      });

      const data = await res.json();

      setQuote(data);
    } finally {
      setLoading(false);
    };
  };

  async function copyQuote() {
    if (copied) return;

    await navigator.clipboard.writeText(`"${quote.quote}"\n— ${quote.author}`);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-cyan-500/50 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <HiMiniChatBubbleLeftRight size={28} className="text-white" />
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                Random Quote
              </p>

              <h2 className="text-2xl font-bold text-white">
                Daily Inspiration
              </h2>
            </div>
          </div>

          <blockquote>
            "{quote.quote}"
          </blockquote>
          <p>
            — {quote.author}
          </p>
        </div>
      </motion.div>
    </section>
  )
}