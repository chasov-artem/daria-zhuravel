import Hero from "../components/Hero";
import ElectrolysisInfo from "../components/ElectrolysisInfo";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Aftercare from "../components/Aftercare";
import AnimatedSection from "../components/AnimatedSection";
import { useLanguage } from "../context/useLanguage";
import { useSeo } from "../hooks/useSeo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const { language, t } = useLanguage();
  const location = useLocation();

  useSeo({
    title: t("seo.homeTitle"),
    description: t("seo.homeDescription"),
    lang: language,
  });

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    const scrollToElement = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToElement, 0);
    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

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
