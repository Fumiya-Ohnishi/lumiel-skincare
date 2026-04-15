import { BRAND } from '@/shared/config/brand'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-space-gray text-white/70 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* top area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* brand col */}
          <div className="md:col-span-2 space-y-5">
            <p className="shimmer-text font-serif text-2xl tracking-[0.4em] font-light">
              {BRAND.name}
            </p>
            <p className="text-xs text-white/50 font-light leading-loose max-w-xs">
              {BRAND.description}
            </p>
            {/* social icons */}
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-widest text-white/40 hover:text-lavender-300 transition-colors font-light"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* nav cols */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.35em] text-white/40 uppercase font-light mb-4">Products</p>
            {[
              'LUMIEL SERUM',
              'LUMIEL CREAM',
              'LUMIEL EYE',
              'すべての商品',
            ].map((item) => (
              <a key={item} href="#" className="block text-xs text-white/60 hover:text-lavender-300 transition-colors font-light">
                {item}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.35em] text-white/40 uppercase font-light mb-4">Company</p>
            {[
              'ブランドについて',
              '成分へのこだわり',
              'サステナビリティ',
              'お問い合わせ',
              'プレスリリース',
            ].map((item) => (
              <a key={item} href="#" className="block text-xs text-white/60 hover:text-lavender-300 transition-colors font-light">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* newsletter */}
        <div className="py-10 border-b border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <p className="text-sm text-white/80 font-light">メールマガジン登録</p>
            <p className="text-xs text-white/40 font-light mt-1">新商品・限定オファーをいち早くお届けします</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 sm:w-60 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-lavender-400 transition-colors font-light"
            />
            <button className="btn-gloss bg-gradient-to-r from-lavender-600 to-lavender-500 text-white text-xs px-6 py-2.5 rounded-full hover:from-lavender-700 hover:to-lavender-600 transition-all font-light tracking-widest whitespace-nowrap">
              登録
            </button>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-[10px] text-white/30 font-light tracking-widest">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['プライバシーポリシー', '特定商取引法', '利用規約'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/30 hover:text-lavender-300 transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
