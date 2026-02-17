import { useLanguage } from "../context/useLanguage";

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
    <section className="bg-beige">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:gap-10 md:px-6 md:py-0">
        <div className="flex items-center justify-center">
          <img
            src="/daria_zhuravel.jpg"
            alt={t("about.photoAlt")}
            className="h-[320px] w-[320px] rounded-full object-cover shadow-card sm:h-[420px] sm:w-[420px]"
          />
        </div>

        <div className="rounded-cardLg bg-white p-8 shadow-card md:p-10">
          <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
            {t("about.title")}
          </h2>

          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 text-base leading-relaxed text-[#5b4737] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
