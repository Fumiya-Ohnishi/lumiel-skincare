import type { Ingredient } from './types'

export const ingredients: Ingredient[] = [
  {
    id: 'niacinamide',
    nameEn: 'Niacinamide',
    nameJa: 'ナイアシンアミド',
    description:
      'メラニン生成を抑制し、くすみ・色ムラを改善。毛穴の引き締めとキメ細かな肌への導く、マルチ効果成分。',
    benefit: '美白 · 毛穴',
    icon: 'hex',
    color: 'from-lavender-400 to-lavender-600',
  },
  {
    id: 'hyaluronic-acid',
    nameEn: 'Hyaluronic Acid',
    nameJa: 'ヒアルロン酸',
    description:
      '3種の分子量のヒアルロン酸が角質層〜表皮まで多段階保湿。1gで約6Lの水を保持する超高保水成分。',
    benefit: '深層保湿',
    icon: 'drop',
    color: 'from-blue-300 to-lavender-400',
  },
  {
    id: 'retinol',
    nameEn: 'Retinol',
    nameJa: 'レチノール',
    description:
      '細胞ターンオーバーを促進し、コラーゲン産生を後押し。ハリと弾力を取り戻し、小じわを目立たなくします。',
    benefit: 'ハリ · 弾力',
    icon: 'diamond',
    color: 'from-violet-400 to-lavender-600',
  },
  {
    id: 'vitamin-c',
    nameEn: 'Vitamin C',
    nameJa: 'ビタミンC誘導体',
    description:
      '安定性に優れた誘導体型ビタミンC。透明感を高めコラーゲン合成をサポートしながら、抗酸化でエイジングケアも。',
    benefit: '透明感',
    icon: 'circle',
    color: 'from-amber-300 to-lavender-500',
  },
]
