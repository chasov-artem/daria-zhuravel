import { useLanguage } from '../context/useLanguage'

function ElectrolysisInfo() {
  const { t } = useLanguage()

  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <article className="rounded-cardLg bg-white p-6 shadow-card md:p-8">
          <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{t('electrolysisInfo.title')}</h2>

          <div className="space-y-4">
            <p className="text-base leading-relaxed text-[#5b4737]">{t('electrolysisInfo.paragraphOne')}</p>
            <p className="text-base leading-relaxed text-[#5b4737]">{t('electrolysisInfo.paragraphTwo')}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ElectrolysisInfo
