import { useEffect, useState } from 'react'
import { useLanguage } from '../context/useLanguage'

function Certificates() {
  const { t } = useLanguage()
  const certificateItems = t('certificates.list')
  const [activeIndex, setActiveIndex] = useState(null)
  const hasCertificates = Array.isArray(certificateItems) && certificateItems.length > 0
  const isModalOpen = activeIndex !== null && hasCertificates

  const closeModal = () => setActiveIndex(null)

  const showPrevious = () => {
    if (!hasCertificates) return
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0
      return (prevIndex - 1 + certificateItems.length) % certificateItems.length
    })
  }

  const showNext = () => {
    if (!hasCertificates) return
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0
      return (prevIndex + 1) % certificateItems.length
    })
  }

  useEffect(() => {
    if (!isModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, certificateItems])

  const activeCertificate = isModalOpen ? certificateItems[activeIndex] : null

  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <h3 className="mb-5 text-xl font-semibold md:text-2xl">{t('certificates.title')}</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.isArray(certificateItems) &&
            certificateItems.map((certificate, index) => (
              <article
                key={certificate.image}
                className="cursor-pointer rounded-card bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.name || 'Certificate'}
                  className="h-44 w-full rounded-card object-cover"
                />
              </article>
            ))}
        </div>
      </div>

      {isModalOpen && activeCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.name || 'Certificate preview'}
        >
          <div
            className="relative w-full max-w-4xl rounded-card bg-white p-4 md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={activeCertificate.image}
              alt={activeCertificate.name || 'Certificate'}
              className="h-[65vh] w-full rounded-card object-contain"
            />

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="rounded-full border border-softBrown px-4 py-2 text-sm font-medium text-softBrown transition hover:bg-softBrown hover:text-white"
                onClick={showPrevious}
              >
                ←
              </button>

              <p className="text-center text-sm font-medium text-[#5b4737]">
                {activeCertificate.name || 'Certificate'} ({activeIndex + 1}/{certificateItems.length})
              </p>

              <button
                type="button"
                className="rounded-full border border-softBrown px-4 py-2 text-sm font-medium text-softBrown transition hover:bg-softBrown hover:text-white"
                onClick={showNext}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
