import type { Product } from './types'

export const products: Product[] = [
  {
    id: 'pure-serum',
    name: 'LUMIEL SERUM',
    jaName: 'ピュアセラム',
    description:
      '高濃度ナイアシンアミドと独自配合の美白成分が、くすみを払いのけ透明感あふれる肌へと導きます。軽いテクスチャーで日常使いに最適。',
    price: 8800,
    volume: '30mL',
    variant: 'serum',
    badge: 'BEST SELLER',
    benefits: ['美白・透明感', '毛穴引き締め', '軽やかなテクスチャー'],
  },
  {
    id: 'moisture-cream',
    name: 'LUMIEL CREAM',
    jaName: 'モイスチャークリーム',
    description:
      '3種のヒアルロン酸が肌の深層から表層まで多段階保湿。セラミド複合体が肌バリアを強化し、しっとりとしたうるおいを一日中キープ。',
    price: 7200,
    volume: '50g',
    variant: 'cream',
    benefits: ['深層・長時間保湿', 'バリア機能強化', 'もちもち肌'],
  },
  {
    id: 'eye-essence',
    name: 'LUMIEL EYE',
    jaName: 'アイエッセンス',
    description:
      '目元の細かいシワ・くすみに特化した集中ケア処方。パテンテッドペプチドとコエンザイムQ10が繊細な目周りを内側からリフトアップ。',
    price: 6600,
    volume: '15mL',
    variant: 'eye',
    benefits: ['目元のシワ改善', 'くすみ・むくみケア', 'ハリ・弾力'],
  },
]
