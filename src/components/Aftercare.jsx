import SocialLinks from './SocialLinks'
import { useLanguage } from '../context/useLanguage'

function Aftercare() {
  const { t } = useLanguage()
  const description = t('aftercare.description')
  const lines =
    typeof description === 'string'
      ? description.split('\n').map((line) => line.trim()).filter(Boolean)
      : []

  const [lead, ...rawTips] = lines
  const tips = rawTips.map((tip) => tip.replace(/^[•-]\s*/, ''))

  return (
    <section className="my-16 bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-semibold md:mb-8 md:text-3xl">{t('aftercare.title')}</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <img
              src="/aftercare-placeholder.png"
              alt={t('aftercare.title')}
              className="h-full max-h-[560px] w-full rounded-cardLg object-cover shadow-card"
            />
          </div>

          <div className="space-y-6">
            <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
              {lead && <p className="mb-4 text-base leading-relaxed text-[#5b4737]">{lead}</p>}

              {tips.length > 0 && (
                <ul className="space-y-2 text-sm leading-relaxed text-[#5b4737] md:text-base">
                  {tips.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[2px] text-softBrown">
                        •
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>

            <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-[#3E2E23]">{t('social.title')}</h3>
              <SocialLinks iconClassName="h-10 w-10" linkClassName="p-1" />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aftercare
