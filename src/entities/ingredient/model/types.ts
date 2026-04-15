export type IconVariant = 'hex' | 'drop' | 'diamond' | 'circle'

export interface Ingredient {
  id: string
  nameEn: string
  nameJa: string
  description: string
  benefit: string
  icon: IconVariant
  color: string
}
