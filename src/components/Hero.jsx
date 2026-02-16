import { useLanguage } from '../context/useLanguage'
import { freshaLinks } from '../config/freshaLinks'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 md:px-6 md:py-12">
      <div className="order-2 flex flex-col justify-center rounded-cardLg bg-white p-8 shadow-card md:order-1 md:p-10">
        <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-5xl">{t('hero.title')}</h1>
        <p className="mb-8 text-base text-[#5b4737] md:text-lg">{t('hero.subtitle')}</p>
        <a
          href={freshaLinks.hero}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-card bg-softBrown px-7 py-3 text-sm font-semibold text-white transition hover:shadow-cardHover md:text-base"
        >
          {t('bookNow')}
        </a>
      </div>

      <div className="order-1 relative min-h-[300px] overflow-hidden rounded-cardLg shadow-card md:order-2 md:min-h-[500px]">
        <img
          src="/hero-placeholder.png"
          alt="Electrolysis specialist portrait"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-beige/35" />
      </div>
    </section>
  )
}

export default Hero
