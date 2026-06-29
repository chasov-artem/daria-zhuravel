import { useCallback, useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiCloseLine } from "react-icons/ri";
import { useLanguage } from "../context/useLanguage";

function WorkspacePhotos() {
  const { t } = useLanguage();
  const photos = t("location.workspacePhotos");
  const hasPhotos = Array.isArray(photos) && photos.length > 0;

  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const isModalOpen = activeIndex !== null && hasPhotos;

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    if (!hasPhotos) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + photos.length) % photos.length,
    );
  }, [hasPhotos, photos.length]);

  const showNext = useCallback(() => {
    if (!hasPhotos) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % photos.length,
    );
  }, [hasPhotos, photos.length]);

  useEffect(() => {
    if (!isModalOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, showPrevious, showNext]);

  const activePhoto = isModalOpen ? photos[activeIndex] : null;

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? 0;
    touchDeltaXRef.current = 0;
  };
  const handleTouchMove = (e) => {
    touchDeltaXRef.current =
      (e.touches[0]?.clientX ?? touchStartXRef.current) - touchStartXRef.current;
  };
  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaXRef.current) >= 50) {
      touchDeltaXRef.current > 0 ? showPrevious() : showNext();
      return;
    }

    if (
      photos.length > 1 &&
      window.matchMedia("(max-width: 639px)").matches
    ) {
      showNext();
    }
  };

  if (!hasPhotos) return null;

  return (
    <div className="mb-6">
      <h4 className="mb-3 text-lg font-semibold text-[#3E2E23]">
        {t("location.workspaceTitle")}
      </h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.image}
            type="button"
            className="cursor-pointer overflow-hidden rounded-lg border border-softBrown/15 bg-white/70 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={photo.image}
              alt={photo.alt}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isModalOpen && activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-white/95 p-2 shadow-[0_8px_32px_rgba(62,46,35,0.12)] sm:p-3 md:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-xl text-[#3E2E23] shadow transition hover:scale-105 hover:rotate-90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2"
              onClick={closeModal}
              aria-label={t("gallery.close")}
            >
              <RiCloseLine />
            </button>

            <div
              className="relative cursor-pointer sm:cursor-default"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="h-[58vh] w-full rounded-lg object-contain sm:h-[65vh] md:h-[70vh]"
              />

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 sm:inline-flex md:left-2 md:h-16 md:w-16"
                    onClick={showPrevious}
                    aria-label={t("gallery.previous")}
                  >
                    <SlArrowLeft className="h-5 w-5 md:h-8 md:w-8" />
                  </button>

                  <button
                    type="button"
                    className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 sm:inline-flex md:right-2 md:h-16 md:w-16"
                    onClick={showNext}
                    aria-label={t("gallery.next")}
                  >
                    <SlArrowRight className="h-5 w-5 md:h-8 md:w-8" />
                  </button>
                </>
              )}
            </div>

            {photos.length > 1 && (
              <div className="mt-3 flex items-center justify-center">
                <p className="text-center text-sm font-medium text-[#5b4737] md:text-base">
                  {activeIndex + 1} / {photos.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkspacePhotos;
