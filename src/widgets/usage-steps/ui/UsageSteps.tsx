import { useReveal } from '@/shared/lib/useReveal'
import { SectionTitle } from '@/shared/ui'

const steps = [
  {
    num: '01',
    title: '洗顔・準備',
    desc: '洗顔後、タオルで顔を軽く押さえます。少しうるおいを残した状態が浸透を高めます。',
    tip: '化粧水でもOK',
  },
  {
    num: '02',
    title: 'セラムを手に取る',
    desc: 'ポンプを2〜3回プッシュし、手のひらに適量を取ります。液が手で温まったら準備完了。',
    tip: '2〜3プッシュが適量',
  },
  {
    num: '03',
    title: 'なじませる',
    desc: '顔の中心から外側へ、優しくプレスするように全体になじませます。こすらず、手のぬくもりで浸透させて。',
    tip: 'ゆっくり押し込むように',
  },
  {
    num: '04',
    title: 'クリームで仕上げ',
    desc: '最後にLUMIEL CREAMを重ねて蓋をします。美容成分を逃さず、1日中うるおいをキープします。',
    tip: '朝夜どちらもOK',
  },
]

export function UsageSteps() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="steps"
      ref={ref}
      className="py-28 bg-gradient-to-b from-pearl to-lavender-50/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className={`mb-20 reveal ${visible ? 'show' : ''}`}>
          <SectionTitle
            subtitle="How to Use"
            title="正しい使い方で、最大の効果を"
            description="4ステップの丁寧なケアルーティンで、LUMIEL本来の力を引き出してください。"
          />
        </div>

        {/* timeline */}
        <div className="relative">
          {/* connecting line — desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-lavender-300/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col items-center text-center gap-5 reveal ${visible ? 'show' : ''} reveal-delay-${i + 1}`}
              >
                {/* step circle */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full glass-strong flex items-center justify-center shadow-lg shadow-lavender-200/50">
                    <span className="font-serif text-3xl text-lavender-600 font-light">{step.num}</span>
                  </div>
                  {/* glow */}
                  <div className="absolute inset-0 rounded-full bg-lavender-200/30 blur-lg -z-10 animate-glow-slow" />
                </div>

                {/* text */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-space-gray font-light">{step.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
                </div>

                {/* tip badge */}
                <span className="text-[10px] text-lavender-500 border border-lavender-200 rounded-full px-4 py-1.5 font-light tracking-wide">
                  {step.tip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* usage note */}
        <div className={`mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center reveal ${visible ? 'show' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-lavender-200 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-lavender-600" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            <strong className="text-space-gray font-normal">ご使用上の注意：</strong>
            初めてご使用の際は、耳の後ろや腕の内側など目立たない部分でパッチテストを行うことをおすすめします。
            異常が生じた場合はすぐに使用を中止し、皮膚科医にご相談ください。
          </p>
        </div>
      </div>
    </section>
  )
}
