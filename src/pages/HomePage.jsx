import Hero from "../components/Hero";
import ElectrolysisInfo from "../components/ElectrolysisInfo";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Aftercare from "../components/Aftercare";
import AnimatedSection from "../components/AnimatedSection";
import { useLanguage } from "../context/useLanguage";
import { useSeo } from "../hooks/useSeo";

function HomePage() {
  const { language, t } = useLanguage();

  useSeo({
    title: t("seo.homeTitle"),
    description: t("seo.homeDescription"),
    lang: language,
  });

  return (
    <Layout>
      <Hero />
      <AnimatedSection duration={1.2} distance={20}>
        <ElectrolysisInfo />
      </AnimatedSection>
      <div className="my-16 space-y-16">
        <Services />
        <Aftercare />
      </div>
    </Layout>
  );
}

export default HomePage;
