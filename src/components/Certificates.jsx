import { useEffect, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { RiCloseLine } from 'react-icons/ri'
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
        <h3 className="mb-5 text-center text-xl font-semibold md:text-2xl">{t('certificates.title')}</h3>

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.name || 'Certificate preview'}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-white/95 p-3 shadow-card md:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-xl text-[#3E2E23] shadow transition hover:scale-105 hover:rotate-90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2"
              onClick={closeModal}
              aria-label="Close"
            >
              <RiCloseLine />
            </button>

            <div className="relative">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.name || 'Certificate'}
                className="h-[70vh] w-full rounded-card object-contain"
              />

              <button
                type="button"
                className="absolute left-2 top-1/2 z-10 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2"
                onClick={showPrevious}
                aria-label="Previous certificate"
              >
                <SlArrowLeft className="h-8 w-8" />
              </button>

              <button
                type="button"
                className="absolute right-2 top-1/2 z-10 inline-flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2"
                onClick={showNext}
                aria-label="Next certificate"
              >
                <SlArrowRight className="h-8 w-8" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center">
              <p className="text-center text-sm font-medium text-[#5b4737] md:text-base">
                {activeCertificate.name || 'Certificate'} ({activeIndex + 1}/{certificateItems.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
