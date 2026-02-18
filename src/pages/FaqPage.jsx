import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useLanguage } from '../context/useLanguage'
import { useSeo } from '../hooks/useSeo'

function FaqPage() {
  const { lang } = useParams()
  const navigate = useNavigate()
  const { language, setLanguage, supportedLanguages, t } = useLanguage()
  const isSupportedLanguage = supportedLanguages.includes(lang)
  const [openIndex, setOpenIndex] = useState(0)
  const pageItems = t('faqPage.items')
  const faqItems = Array.isArray(pageItems) ? pageItems : []

  useEffect(() => {
    if (isSupportedLanguage) {
      setLanguage(lang)
    }
  }, [isSupportedLanguage, lang, setLanguage])

  useSeo({
    title: t('seo.faqTitle'),
    description: t('seo.faqDescription'),
    lang: language,
  })

  if (!isSupportedLanguage) {
    return <Navigate to="/en" replace />
  }

  return (
    <Layout>
      <section className="mx-auto my-12 max-w-5xl rounded-cardLg bg-white px-6 py-8 shadow-card md:px-10 md:py-12">
        <div className="mb-8 flex items-center gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
          <h1 className="text-center text-2xl font-semibold uppercase tracking-wide text-[#6b4f61] md:text-4xl">
            {t('faq.pageTitle')}
          </h1>
          <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
        </div>

        <div className="mb-6">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1)
                return
              }
              navigate(`/${language}`)
            }}
            className="inline-flex items-center rounded-card border border-softBrown/25 bg-white px-4 py-2 text-sm font-medium text-[#3E2E23] transition hover:bg-beige"
          >
            ← {t('faq.backButton')}
          </button>
        </div>

        <div className="border-t border-softBrown/20">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className="border-b border-softBrown/20">
                <button
                  type="button"
                  onClick={() => setOpenIndex((previousIndex) => (previousIndex === index ? null : index))}
                  className="flex w-full items-center gap-3 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span aria-hidden="true" className="text-lg leading-none text-[#6b4f61]">
                    {isOpen ? '−' : '+'}
                  </span>
                  <span className="text-base font-medium text-[#6b4f61] md:text-lg">{item.question}</span>
                </button>

                {isOpen && (
                  <p className="whitespace-pre-line pb-5 pl-6 text-sm leading-relaxed text-[#5b4737] md:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage
