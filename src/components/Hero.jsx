import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { freshaLinks } from "../config/freshaLinks";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionImg = motion.img;

function Hero() {
  const { t } = useLanguage();
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const titleLineOne = t("hero.titleLineOne");
  const titleLineTwo = t("hero.titleLineTwo");
  const subtitle = t("hero.subtitle");
  const visibleSubtitle = subtitle.startsWith(typedSubtitle) ? typedSubtitle : "";

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.webp')" }}
      aria-label="Electrolysis specialist portrait"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#f5f0e8]/60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 py-8 md:grid-cols-2 md:px-6 md:py-12">
        <MotionDiv
          className="order-2 flex flex-col items-center justify-center p-8 text-center md:order-1 md:items-start md:p-10 md:text-left"
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
            className="mb-3 min-h-8 text-base text-[#5b4737] md:text-lg"
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
              className="ml-1 inline-block h-[1em] w-px bg-[#5b4737] align-[-0.12em]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </MotionP>

          <MotionDiv
            className="mx-auto mb-7 h-[2px] w-full max-w-[320px] overflow-hidden rounded-full bg-softBrown/20 md:mx-0"
            variants={{
              hidden: { opacity: 0, scaleX: 0, transformOrigin: "left" },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <MotionSpan
              className="block h-full w-full bg-softBrown"
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
              href={freshaLinks.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-lg border border-softBrown/50 bg-softBrown px-6 py-3 text-base font-semibold text-white transition hover:bg-softBrown/90 hover:shadow-md"
            >
              {t("bookNow")}
            </a>
          </MotionDiv>
        </MotionDiv>

        <div className="order-1 mx-auto flex min-h-[300px] items-center justify-center md:order-2 md:mx-0 md:min-h-[500px] md:justify-start">
          <MotionDiv
            className="h-[300px] w-[180px] md:h-[500px] md:w-[280px]"
            initial={{ opacity: 0, x: 28, scale: 0.94, rotate: -2 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
              transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
            }}
          >
            <MotionImg
              src="/biglogo.PNG"
              alt="Daria Zhuravel logo"
              className="h-full w-full object-contain object-center"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 5.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

export default Hero;
