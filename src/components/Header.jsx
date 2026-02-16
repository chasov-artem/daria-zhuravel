import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { freshaLinks } from '../config/freshaLinks'

const NAV_ITEMS = ['home', 'services', 'about', 'contact']

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { language, supportedLanguages, t, changeLanguage } = useLanguage()

  const handleLanguageChange = (nextLanguage) => {
    changeLanguage(nextLanguage)
    navigate(`/${nextLanguage}`)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-softBrown/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to={`/${language}`} className="flex items-center gap-3 no-underline">
          <img src="/daria-logo.PNG" alt="Studio logo" className="h-12 w-auto object-contain" />
          <img src="/studio.png" alt={t('studioName')} className="h-7 w-auto object-contain sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="text-sm font-medium hover:text-softBrown">
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {supportedLanguages.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                language === code ? 'bg-softBrown text-white' : 'bg-beige text-[#3E2E23]'
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <a
          href={freshaLinks.header}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-card bg-softBrown px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:shadow-cardHover md:inline-flex"
        >
          BOOK NOW
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-softBrown/20 bg-beige md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-softBrown/10 bg-white px-4 py-4 md:hidden">
          <nav className="mb-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a key={item} href="#" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>

          <div className="mb-4 flex items-center gap-2">
            {supportedLanguages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleLanguageChange(code)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  language === code ? 'bg-softBrown text-white' : 'bg-beige text-[#3E2E23]'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href={freshaLinks.header}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-card bg-softBrown px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
