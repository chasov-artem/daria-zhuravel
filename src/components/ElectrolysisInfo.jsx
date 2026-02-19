import { useLanguage } from '../context/useLanguage'

function ElectrolysisInfo() {
  const { t } = useLanguage()

  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
          <h2 className="mb-5 text-center text-2xl font-semibold md:text-3xl">{t('electrolysisInfo.title')}</h2>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="space-y-4 md:w-3/5">
              <p className="text-base leading-relaxed text-[#5b4737]">{t('electrolysisInfo.paragraphOne')}</p>
              <p className="text-base leading-relaxed text-[#5b4737]">{t('electrolysisInfo.paragraphTwo')}</p>
            </div>

            <div className="md:w-2/5">
              <img
                src="/Electrolysis.jpg"
                alt={t('electrolysisInfo.title')}
                className="h-full w-full rounded-card object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ElectrolysisInfo
