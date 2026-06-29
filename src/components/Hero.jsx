import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { socialLinks } from "../config/socialLinks";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSpan = motion.span;

function Hero() {
  const { t } = useLanguage();
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const titleLineOne = t("hero.titleLineOne");
  const titleLineTwo = t("hero.titleLineTwo");
  const subtitle = t("hero.subtitle");
  const visibleSubtitle = subtitle.startsWith(typedSubtitle)
    ? typedSubtitle
    : "";

  useEffect(() => {
    if (!subtitle || typeof subtitle !== "string") {
      return;
    }

    let charIndex = 0;
    const intervalId = setInterval(() => {
      charIndex += 1;
      setTypedSubtitle(subtitle.slice(0, charIndex));

      if (charIndex >= subtitle.length) {
        clearInterval(intervalId);
      }
    }, 26);

    return () => clearInterval(intervalId);
  }, [subtitle]);

  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-[540px] flex-col justify-end overflow-hidden bg-cover bg-no-repeat scroll-mt-28 bg-position-[center_18%] md:min-h-screen md:justify-center md:bg-position-[22%_center]"
      style={{ backgroundImage: "url('/hero%20daria.webp')" }}
      aria-label="Electrolysis specialist portrait"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#f5f0e8]/78 via-[#f5f0e8]/18 to-transparent md:bg-linear-to-l md:from-transparent md:via-[#f5f0e8]/12 md:to-[#f5f0e8]/68" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-end justify-end px-4 pb-8 pt-20 md:items-center md:px-6 md:py-14">
        <MotionDiv
          className="flex max-w-md flex-col items-center p-2 text-center text-white md:max-w-xl md:items-end md:p-6 md:text-right"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.14, delayChildren: 0.1 },
            },
          }}
        >
          <MotionH1
            className="mb-4 text-3xl font-semibold leading-tight md:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <span className="block">{titleLineOne}</span>
            <span className="mt-1 block">{titleLineTwo}</span>
          </MotionH1>

          <MotionP
            className="mb-3 min-h-8 text-base md:text-lg"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {visibleSubtitle}
            <MotionSpan
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-px bg-white align-[-0.12em]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </MotionP>

          <MotionDiv
            className="mx-auto mb-7 h-[2px] w-full max-w-[320px] overflow-hidden rounded-full bg-white/30 md:mx-0 md:ml-auto"
            variants={{
              hidden: { opacity: 0, scaleX: 0, transformOrigin: "center" },
              show: {
                opacity: 1,
                scaleX: 1,
                transformOrigin: "center",
                transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <MotionSpan
              className="block h-full w-full bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
            />
          </MotionDiv>

          <MotionDiv
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("bookNow")}
              className="inline-flex w-fit cursor-pointer rounded-lg border border-softBrown/50 bg-softBrown px-6 py-3 text-base font-semibold text-white transition hover:bg-softBrown/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
            >
              {t("bookNow")}
            </a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default Hero;
