import { useLanguage } from '../context/useLanguage'
import { freshaLinks } from '../config/freshaLinks'

function Services() {
  const { t } = useLanguage()
  const serviceItems = t('services.list')

  return (
    <section className="my-16 bg-beige">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-semibold md:mb-8 md:text-3xl">{t('services.title')}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Array.isArray(serviceItems) &&
            serviceItems.map((service) => (
              <article
                key={service.id}
                className="overflow-hidden rounded-cardLg bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="flex h-full flex-col lg:flex-row">
                  <div className="h-48 w-full lg:h-auto lg:w-2/5">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 md:p-6 lg:w-3/5">
                    <h3 className="mb-3 text-lg font-semibold text-[#3E2E23]">{service.name}</h3>
                    <p className="mb-5 flex-1 whitespace-pre-line text-sm leading-relaxed text-[#5b4737] md:text-base">
                      {service.description}
                    </p>

                    <a
                      href={freshaLinks[service.id] || freshaLinks.general}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center rounded-full border border-softBrown px-4 py-2 text-sm font-medium text-softBrown transition hover:bg-softBrown hover:text-white"
                    >
                      {t('bookNow')}
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Services
