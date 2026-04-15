import type { BottleVariant } from '@/shared/ui'

export interface Product {
  id: string
  name: string
  jaName: string
  description: string
  price: number
  volume: string
  variant: BottleVariant
  badge?: string
  benefits: string[]
}
