import { useState } from 'react'

export function useFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return { openIndex, toggle }
}
