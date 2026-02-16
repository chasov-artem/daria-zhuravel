import { useLanguage } from '../context/useLanguage'

function Certificates() {
  const { t } = useLanguage()
  const certificateItems = t('certificates.list')

  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <h3 className="mb-5 text-xl font-semibold md:text-2xl">{t('certificates.title')}</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.isArray(certificateItems) &&
            certificateItems.map((certificate) => (
              <article
                key={certificate.name}
                className="rounded-card bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="mb-3 h-44 w-full rounded-card object-cover"
                />
                <p className="text-sm font-medium text-[#3E2E23]">{certificate.name}</p>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
