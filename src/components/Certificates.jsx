import { useCallback, useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiCloseLine } from "react-icons/ri";
import { useLanguage } from "../context/useLanguage";

function Certificates() {
  const { t } = useLanguage();
  const certificateItems = t("certificates.list");
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const hasCertificates =
    Array.isArray(certificateItems) && certificateItems.length > 0;
  const isModalOpen = activeIndex !== null && hasCertificates;

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    if (!hasCertificates) return;
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (
        (prevIndex - 1 + certificateItems.length) % certificateItems.length
      );
    });
  }, [hasCertificates, certificateItems.length]);

  const showNext = useCallback(() => {
    if (!hasCertificates) return;
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % certificateItems.length;
    });
  }, [hasCertificates, certificateItems.length]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal, showPrevious, showNext]);

  const activeCertificate = isModalOpen ? certificateItems[activeIndex] : null;
  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? 0;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0]?.clientX ?? touchStartXRef.current;
    touchDeltaXRef.current = currentX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    if (Math.abs(touchDeltaXRef.current) < swipeThreshold) return;

    if (touchDeltaXRef.current > 0) {
      showPrevious();
      return;
    }

    showNext();
  };

  return (
    <section id="certificates" className="bg-beige scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <h3 className="mb-5 text-center text-xl font-semibold md:text-2xl">
          {t("certificates.title")}
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.isArray(certificateItems) &&
            certificateItems.map((certificate, index) => (
              <article
                key={certificate.image}
                role="button"
                tabIndex={0}
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-softBrown/20 p-4 transition hover:-translate-y-1 hover:border-softBrown/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={certificate.image}
                    alt={certificate.name || "Certificate"}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out hover:scale-[1.015]"
                  />
                </div>
              </article>
            ))}
        </div>
      </div>

      {isModalOpen && activeCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.name || "Certificate preview"}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-white/95 p-2 shadow-card sm:p-3 md:p-4"
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

            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={activeCertificate.image}
                alt={activeCertificate.name || "Certificate"}
                className="h-[58vh] w-full rounded-card object-contain sm:h-[65vh] md:h-[70vh]"
              />

              <button
                type="button"
                className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 sm:inline-flex md:left-2 md:h-16 md:w-16"
                onClick={showPrevious}
                aria-label="Previous certificate"
              >
                <SlArrowLeft className="h-5 w-5 md:h-8 md:w-8" />
              </button>

              <button
                type="button"
                className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 sm:inline-flex md:right-2 md:h-16 md:w-16"
                onClick={showNext}
                aria-label="Next certificate"
              >
                <SlArrowRight className="h-5 w-5 md:h-8 md:w-8" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center">
              <p className="text-center text-sm font-medium text-[#5b4737] md:text-base">
                {activeCertificate.name || "Certificate"} ({activeIndex + 1}/
                {certificateItems.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
