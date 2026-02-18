import Hero from '../components/Hero'
import ElectrolysisInfo from '../components/ElectrolysisInfo'
import Layout from '../components/Layout'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Services from '../components/Services'
import Aftercare from '../components/Aftercare'
import { useLanguage } from '../context/useLanguage'
import { useSeo } from '../hooks/useSeo'

function HomePage() {
  const { language, t } = useLanguage()

  useSeo({
    title: t('seo.homeTitle'),
    description: t('seo.homeDescription'),
    lang: language,
  })

  return (
    <Layout>
      <Hero />
      <ElectrolysisInfo />
      <div className="my-16 space-y-16">
        <About />
        <Certificates />
        <Services />
        <Aftercare />
      </div>
    </Layout>
  )
}

export default HomePage
