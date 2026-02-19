import { useLanguage } from "../context/useLanguage";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

function About() {
  const { t } = useLanguage();
  const description = t("about.description");
  const paragraphs =
    typeof description === "string"
      ? description
          .split("\n")
          .map((paragraph) => paragraph.trim())
          .filter(Boolean)
      : [];

  return (
    <section id="about" className="bg-beige scroll-mt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:gap-10 md:px-6 md:py-0">
        <MotionDiv
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-3xl border border-softBrown/20 bg-white/60 p-2 shadow-card">
            <img
              src="/daria_zhuravel.webp"
              alt={t("about.photoAlt")}
              className="h-[360px] w-[300px] rounded-[1.25rem] object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.015] sm:h-[520px] sm:w-[400px]"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          className="p-8 md:p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.05 },
            },
          }}
        >
          <MotionH2
            className="mb-5 text-center text-2xl font-semibold md:text-3xl"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {t("about.title")}
          </MotionH2>

          {paragraphs.map((paragraph) => (
            <MotionP
              key={paragraph}
              className="mb-4 text-base leading-relaxed text-[#5b4737] last:mb-0"
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {paragraph}
            </MotionP>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

export default About;
