import { useLanguage } from "../context/useLanguage";
import { motion } from "framer-motion";

const MotionArticle = motion.article;
const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionImg = motion.img;

function ElectrolysisInfo() {
  const { t } = useLanguage();

  return (
    <section id="electrolysis" className="bg-beige pb-12 md:pb-16 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionArticle
          className="border-b border-softBrown/20 pb-12 pt-6 md:pb-16 md:pt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.16, delayChildren: 0.06 },
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
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {t("electrolysisInfo.title")}
          </MotionH2>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <MotionDiv
              className="space-y-4 md:w-3/5"
              variants={{
                hidden: { opacity: 0, x: -42 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <p className="text-base leading-relaxed text-[#5b4737]">
                {t("electrolysisInfo.paragraphOne")}
              </p>
              <p className="text-base leading-relaxed text-[#5b4737]">
                {t("electrolysisInfo.paragraphTwo")}
              </p>
            </MotionDiv>

            <MotionDiv
              className="md:w-2/5"
              variants={{
                hidden: { opacity: 0, x: 42 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <MotionImg
                src="/electro.webp"
                alt={t("electrolysisInfo.title")}
                className="h-full w-full rounded-lg object-cover"
                loading="lazy"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </MotionDiv>
          </div>
        </MotionArticle>
      </div>
    </section>
  );
}

export default ElectrolysisInfo;
