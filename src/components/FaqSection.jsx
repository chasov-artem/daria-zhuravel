import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { motion, AnimatePresence } from "framer-motion";

function FaqSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const items = t("faq.items");
  const faqItems = Array.isArray(items) ? items : [];

  const toggleItem = (index) => {
    setOpenIndex((previousIndex) => (previousIndex === index ? null : index));
  };

  return (
    <motion.article
      id="faq"
      className="border-b border-softBrown/20 p-6 scroll-mt-28 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-[#3E2E23] md:text-3xl">
          {t("faq.title")}
        </h3>
        <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
      </div>

      <div className="mt-6 border-t border-softBrown/20">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="border-b border-softBrown/20">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full cursor-pointer items-center gap-3 py-4 text-left transition-colors hover:text-softBrown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-inset"
                aria-expanded={isOpen}
              >
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-[#3E2E23] transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                >
                  +
                </span>
                <span className="text-base font-medium text-[#3E2E23] md:text-lg">
                  {item.question}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden whitespace-pre-line pb-4 pl-6 text-sm leading-relaxed text-[#5b4737] md:text-base"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to={`/${language}/faq`}
          className="cta-unified focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
        >
          {t("faq.button")}
        </Link>
      </div>
    </motion.article>
  );
}

export default FaqSection;
