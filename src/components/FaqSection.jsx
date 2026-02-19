import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function FaqSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const items = t("faq.items");
  const faqItems = Array.isArray(items) ? items : [];

  const toggleItem = (index) => {
    setOpenIndex((previousIndex) => (previousIndex === index ? null : index));
  };

  return (
    <article className="border-b border-softBrown/20 p-6 md:p-8">
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-[#6b4f61] md:text-3xl">
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
                className="flex w-full items-center gap-3 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-[#6b4f61]"
                >
                  {isOpen ? "−" : "+"}
                </span>
                <span className="text-base font-medium text-[#6b4f61] md:text-lg">
                  {item.question}
                </span>
              </button>

              {isOpen && (
                <p className="whitespace-pre-line pb-4 pl-6 text-sm leading-relaxed text-[#5b4737] md:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to={`/${language}/faq`}
          className="cta-unified"
        >
          {t("faq.button")}
        </Link>
      </div>
    </article>
  );
}

export default FaqSection;
