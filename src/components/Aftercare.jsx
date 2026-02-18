import SocialLinks from './SocialLinks'
import { useLanguage } from '../context/useLanguage'

function Aftercare() {
  const { t, language } = useLanguage()
  const description = t('aftercare.description')
  const lines =
    typeof description === 'string'
      ? description.split('\n').map((line) => line.trim()).filter(Boolean)
      : []
  const isRussian = language === 'ru'
  const mapLanguage = isRussian ? 'ru' : 'en'
  const beforecareImage = isRussian ? '/before-ru.jpg' : '/before.jpg'
  const aftercareImage = isRussian ? '/after-ru.jpg' : '/after.jpg'
  const beforecareAlt = isRussian ? 'Рекомендации перед электроэпиляцией' : 'Recommendations before electrolysis'
  const aftercareAlt = isRussian ? 'Рекомендации после электроэпиляции' : 'Recommendations after electrolysis'

  const [lead, ...rawTips] = lines
  const tips = rawTips.map((tip) => tip.replace(/^[•-]\s*/, ''))

  return (
    <section className="my-16 bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-semibold md:mb-8 md:text-3xl">{t('aftercare.title')}</h2>

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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <img
              src={beforecareImage}
              alt={beforecareAlt}
              className="w-full rounded-cardLg bg-white object-contain shadow-card"
            />
            <img
              src={aftercareImage}
              alt={aftercareAlt}
              className="w-full rounded-cardLg bg-white object-contain shadow-card"
            />
          </div>

          <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
            <h3 className="mb-4 text-xl font-semibold text-[#3E2E23]">{t('location.title')}</h3>
            <p className="text-base leading-relaxed text-[#5b4737]">{t('location.addressLineOne')}</p>
            <p className="mb-4 text-base leading-relaxed text-[#5b4737]">{t('location.addressLineTwo')}</p>
            <div className="overflow-hidden rounded-card border border-softBrown/15">
              <iframe
                title={t('location.mapTitle')}
                src={`https://www.google.com/maps?q=5%20Carole%20Crescent%2C%20Pakuranga%2C%20Auckland%202010&output=embed&hl=${mapLanguage}`}
                className="h-64 w-full md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
            <h3 className="mb-4 text-xl font-semibold text-[#3E2E23]">{t('social.title')}</h3>
            <SocialLinks iconClassName="h-10 w-10" linkClassName="p-1" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Aftercare
