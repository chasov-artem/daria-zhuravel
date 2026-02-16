import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useLanguage } from '../context/useLanguage'
import { useSeo } from '../hooks/useSeo'

function PrivacyPolicy() {
  const { lang } = useParams()
  const { language, setLanguage, supportedLanguages, t } = useLanguage()
  const isSupportedLanguage = supportedLanguages.includes(lang)

  useEffect(() => {
    if (isSupportedLanguage) {
      setLanguage(lang)
    }
  }, [isSupportedLanguage, lang, setLanguage])

  useSeo({
    title: t('seo.privacyTitle'),
    description: t('seo.privacyDescription'),
    lang: language,
  })

  if (!isSupportedLanguage) {
    return <Navigate to="/en" replace />
  }

  return (
    <Layout>
      <section className="mx-auto my-12 max-w-4xl rounded-cardLg bg-white px-6 py-8 shadow-card md:px-10 md:py-12">
        <h1 className="mb-4 text-3xl font-semibold">{t('legal.privacy.title')}</h1>
        <p className="mb-6 text-sm text-[#5b4737]">{t('legal.privacy.updatedAt')}</p>
        <p className="mb-6 text-base leading-relaxed text-[#5b4737]">{t('legal.privacy.intro')}</p>
        <p className="mb-8 rounded-card bg-beige p-4 text-sm text-[#5b4737]">{t('legal.disclaimer')}</p>
      </section>
    </Layout>
  )
}

export default PrivacyPolicy
