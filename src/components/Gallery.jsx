import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiCloseLine } from "react-icons/ri";
import { useLanguage } from "../context/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Gallery() {
  const { t, language } = useLanguage();
  const galleryItems = t("gallery.list");
  const hasItems = Array.isArray(galleryItems) && galleryItems.length > 0;

  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const isModalOpen = activeIndex !== null && hasItems;

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, [hasItems, galleryItems.length]);

  const showNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length
    );
  }, [hasItems, galleryItems.length]);

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

  const activeItem = isModalOpen ? galleryItems[activeIndex] : null;

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? 0;
    touchDeltaXRef.current = 0;
  };
  const handleTouchMove = (e) => {
    touchDeltaXRef.current = (e.touches[0]?.clientX ?? touchStartXRef.current) - touchStartXRef.current;
  };
  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaXRef.current) < 50) return;
    touchDeltaXRef.current > 0 ? showPrevious() : showNext();
  };

  if (!hasItems) return null;

  return (
    <section id="gallery" className="bg-beige scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <h3 className="mb-5 text-center text-xl font-semibold md:text-2xl">
          {t("gallery.title")}
        </h3>

        <div className="relative">
          <Swiper
            className="gallery-swiper"
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.image}>
                <button
                  type="button"
                  className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 focus-visible:rounded-xl"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(62,46,35,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(62,46,35,0.12)]">
                    <img
                      src={item.image}
                      alt={item.alt || t("gallery.workAlt")}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label={t("gallery.previous")}
            className="gallery-prev absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 md:left-2 md:h-12 md:w-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={t("gallery.next")}
            className="gallery-next absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3E2E23] shadow transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/80 focus-visible:ring-offset-2 md:right-2 md:h-12 md:w-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            to={`/${language}/gallery`}
            className="cta-unified inline-flex items-center gap-2 transition"
          >
            {t("gallery.viewMore")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {isModalOpen && activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt || t("gallery.workAlt")}
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
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={activeItem.image}
                alt={activeItem.alt || t("gallery.workAlt")}
                className="h-[58vh] w-full rounded-lg object-contain sm:h-[65vh] md:h-[70vh]"
              />

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
            </div>

            <div className="mt-3 flex items-center justify-center">
              <p className="text-center text-sm font-medium text-[#5b4737] md:text-base">
                {activeIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
