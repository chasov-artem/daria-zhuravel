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
          <div className="group relative w-full max-w-[340px]">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(62,46,35,0.12)] transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(62,46,35,0.16)]">
              <img
                src="/daria_zhuravel.webp"
                alt={t("about.photoAlt")}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ minHeight: "360px" }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 transition-opacity duration-500 group-hover:ring-softBrown/20" />
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-softBrown/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
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
