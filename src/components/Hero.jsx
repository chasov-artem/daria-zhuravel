import { useLanguage } from "../context/useLanguage";
import { freshaLinks } from "../config/freshaLinks";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      aria-label="Electrolysis specialist portrait"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#f5f0e8]/60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 py-8 md:grid-cols-2 md:px-6 md:py-12">
        <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-10">
          <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mb-8 text-base text-[#5b4737] md:text-lg">
            {t("hero.subtitle")}
          </p>
          <a
            href={freshaLinks.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-card bg-softBrown px-1 py-1 text-sm font-semibold text-white transition hover:shadow-cardHover md:text-base"
          >
            {t("bookNow")}
          </a>
        </div>

        <div className="order-1 mx-auto flex min-h-[300px] items-center justify-center md:order-2 md:mx-0 md:min-h-[500px] md:justify-start">
          <div className="h-[300px] w-[180px] overflow-hidden md:h-[500px] md:w-[280px]">
            <img
              src="/biglogo.PNG"
              alt="Daria Zhuravel logo"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
