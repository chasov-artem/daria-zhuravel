import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useLanguage } from '../context/useLanguage'
import { useSeo } from '../hooks/useSeo'

function TermsOfUse() {
  const { lang } = useParams()
  const { language, setLanguage, supportedLanguages, t } = useLanguage()
  const isSupportedLanguage = supportedLanguages.includes(lang)

  useEffect(() => {
    if (isSupportedLanguage) {
      setLanguage(lang)
    }
  }, [isSupportedLanguage, lang, setLanguage])

  useSeo({
    title: t('seo.termsTitle'),
    description: t('seo.termsDescription'),
    lang: language,
  })

  if (!isSupportedLanguage) {
    return <Navigate to="/en" replace />
  }

  return (
    <Layout>
      <section className="mx-auto my-12 max-w-4xl rounded-cardLg bg-white px-6 py-8 shadow-card md:px-10 md:py-12">
        <h1 className="mb-4 text-3xl font-semibold">{t('legal.terms.title')}</h1>
        <p className="mb-6 text-sm text-[#5b4737]">{t('legal.terms.updatedAt')}</p>
        <div className="mb-6">
          <Link
            to={`/${language}`}
            className="inline-flex items-center rounded-card border border-softBrown/25 bg-white px-4 py-2 text-sm font-medium text-[#3E2E23] transition hover:bg-beige"
          >
            ← {t('faq.backButton')}
          </Link>
        </div>
        <p className="mb-6 text-base leading-relaxed text-[#5b4737]">{t('legal.terms.intro')}</p>
        {Array.isArray(t('legal.terms.sections')) &&
          t('legal.terms.sections').map((section) => (
            <article key={section.heading} className="mb-6">
              <h2 className="mb-2 text-xl font-semibold text-[#3E2E23]">{section.heading}</h2>
              {Array.isArray(section.paragraphs) &&
                section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-3 text-base leading-relaxed text-[#5b4737]">
                    {paragraph}
                  </p>
                ))}
              {Array.isArray(section.bullets) && section.bullets.length > 0 && (
                <ul className="space-y-2 text-base leading-relaxed text-[#5b4737]">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[2px] text-softBrown">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        <p className="mb-6 text-base leading-relaxed text-[#5b4737]">{t('legal.terms.contact')}</p>
        <p className="mb-8 rounded-card bg-beige p-4 text-sm text-[#5b4737]">{t('legal.disclaimer')}</p>
      </section>
    </Layout>
  )
}

export default TermsOfUse
