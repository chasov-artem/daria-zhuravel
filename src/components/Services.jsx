import { useLanguage } from "../context/useLanguage";
import { freshaLinks } from "../config/freshaLinks";
import { motion as Motion } from "framer-motion";

function parsePhotoCaption(caption) {
  if (typeof caption !== "string") return { title: "", description: "" };
  const [title, ...rest] = caption.split(" - ");
  if (rest.length === 0) return { title: "", description: caption };
  return { title: title.trim(), description: rest.join(" - ").trim() };
}

function Services() {
  const { t } = useLanguage();
  const serviceItems = t("services.list");

  return (
    <section className="my-16 bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold md:mb-8 md:text-3xl">
          {t("services.title")}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {Array.isArray(serviceItems) &&
            serviceItems.map((service) => {
              const { title, description } = parsePhotoCaption(
                service.photoCaption,
              );

              return (
                <article
                  key={service.id}
                  className="overflow-hidden border-b border-softBrown/20 pb-8 last:border-b-0"
                >
                  <div className="flex h-full flex-col md:flex-row">
                    <Motion.div
                      className="group relative h-56 w-full overflow-hidden rounded-lg md:h-auto md:w-2/5"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 1.1 }}
                    >
                      <Motion.img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      />
                      {service.photoCaption && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-3">
                          <div className="max-w-[90%] text-center text-white">
                            {title && (
                              <p className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold uppercase tracking-wide md:text-base">
                                {title}
                              </p>
                            )}
                            <p className="text-sm font-medium leading-snug md:text-lg">
                              {description}
                            </p>
                          </div>
                        </div>
                      )}
                    </Motion.div>

                    <Motion.div
                      className="flex flex-1 flex-col p-4 md:w-3/5 md:p-5"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 1.1, delay: 0.16 }}
                    >
                      <h3 className="mb-2 text-base font-semibold text-[#3E2E23] md:text-lg">
                        {service.name}
                      </h3>
                      <p className="mb-3 whitespace-pre-line text-sm leading-relaxed text-[#5b4737]">
                        {service.description}
                      </p>

                      <a
                        href={freshaLinks[service.id] || freshaLinks.general}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center rounded-full border border-softBrown px-4 py-2 text-sm font-medium text-softBrown transition hover:-translate-y-0.5 hover:bg-softBrown hover:text-white hover:shadow-md"
                      >
                        {t("bookNow")}
                      </a>
                    </Motion.div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;
