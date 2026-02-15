import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

function HomePage() {
  const { language, supportedLanguages, t } = useLanguage()

  return (
    <main className="min-h-screen bg-beige px-4 py-10 text-softBrown">
      <section className="mx-auto max-w-3xl rounded-cardLg bg-white p-8 shadow-card md:p-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold md:text-4xl">{t('heroTitle')}</h1>
          <nav className="flex items-center gap-2">
            <span className="text-sm">{t('languageLabel')}:</span>
            {supportedLanguages.map((code) => (
              <Link
                key={code}
                to={`/${code}`}
                className={`rounded-md px-3 py-1 text-sm capitalize transition ${
                  language === code
                    ? 'bg-softBrown text-white'
                    : 'bg-beige text-softBrown hover:shadow-card'
                }`}
              >
                {code}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mb-8 text-base md:text-lg">{t('heroSubtitle')}</p>

        <button
          type="button"
          className="rounded-card bg-softBrown px-6 py-3 text-sm font-medium text-white transition hover:shadow-cardHover"
        >
          {t('bookNow')}
        </button>
      </section>
    </main>
  )
}

export default HomePage
