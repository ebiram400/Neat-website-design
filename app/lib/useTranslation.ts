'use client'

import { useParams } from 'next/navigation'
import fa from '@/app/lib/fa.json'
import en from '@/app/lib/en.json'
import ar from '@/app/lib/ar.json'

const dictionaries: Record<string, Record<string, string>> = {
  fa,
  en,
  ar,
}

export default function useTranslation() {
  const { lang } = useParams<{ lang: string }>()

  const dict = dictionaries[lang] ?? dictionaries.fa

  function t(key: string) {
    return dict[key] ?? key
  }

  return t
}
