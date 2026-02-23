import { useLanguage } from "../context/useLanguage";
import { socialLinks } from "../config/socialLinks";
import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionArticle = motion.article;

function Prices() {
  const { t } = useLanguage();
  const consultation = t("prices.consultation");
  const packages = t("prices.packages");
  const policy = t("prices.policy");
  const saveLabel = t("prices.saveLabel");

  const hasConsultation = consultation && typeof consultation === "object";
  const hasPackages = Array.isArray(packages) && packages.length > 0;
  const hasPolicy = policy && typeof policy === "object" && Array.isArray(policy.items);

  return (
    <section id="prices" className="my-16 bg-beige scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionH2
          className="mb-8 text-center text-2xl font-semibold md:mb-10 md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("prices.title")}
        </MotionH2>

        <div className="space-y-8">
          {hasConsultation && (
            <MotionArticle
              className="border-b border-softBrown/20 pb-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-base text-[#5b4737] md:text-lg">
                  {consultation.label}
                </span>
                <span className="font-semibold text-[#3E2E23]">
                  {consultation.price}
                </span>
              </div>
            </MotionArticle>
          )}

          {hasPackages &&
            packages.map((pkg, index) => (
              <MotionArticle
                key={pkg.duration}
                className="border-b border-softBrown/20 pb-8 pt-4 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#3E2E23] md:text-xl">
                    {pkg.duration}
                  </h3>
                  {pkg.bestValue && (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-softBrown/15 px-2.5 py-0.5 text-sm font-medium text-softBrown"
                      aria-label={t("prices.bestValue")}
                    >
                      <RiStarFill className="h-4 w-4" aria-hidden />
                      {t("prices.bestValue")}
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {Array.isArray(pkg.items) &&
                    pkg.items.map((item) => (
                      <li
                        key={`${item.label}-${item.price}`}
                        className="flex flex-wrap items-baseline justify-between gap-2 text-[#5b4737]"
                      >
                        <span className="text-base">{item.label}</span>
                        <span className="flex items-baseline gap-2">
                          <span className="font-medium text-[#3E2E23]">
                            {item.price}
                          </span>
                          {item.save && (
                            <span className="text-sm text-softBrown">
                              ({saveLabel} {item.save})
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                </ul>
              </MotionArticle>
            ))}

          {hasPolicy && (
            <MotionArticle
              className="rounded-lg border border-softBrown/20 bg-white/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="mb-4 text-lg font-semibold text-[#3E2E23]">
                {policy.title}
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-[#5b4737] md:text-base">
                {policy.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 text-softBrown"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MotionArticle>
          )}
        </div>

        <MotionDiv
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label={t("bookNow")}
            className="inline-flex cursor-pointer items-center rounded-full border border-softBrown px-6 py-3 text-base font-medium text-softBrown transition hover:-translate-y-0.5 hover:bg-softBrown hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
          >
            {t("bookNow")}
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}

export default Prices;
