import { useCallback, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiCloseLine } from "react-icons/ri";
import Layout from "../components/Layout";
import { useLanguage } from "../context/useLanguage";
import { useSeo } from "../hooks/useSeo";

function GalleryPage() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { language, setLanguage, supportedLanguages, t } = useLanguage();
  const isSupportedLanguage = supportedLanguages.includes(lang);
  const galleryItems = t("gallery.list");
  const hasItems = Array.isArray(galleryItems) && galleryItems.length > 0;

  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const isModalOpen = activeIndex !== null && hasItems;

  useEffect(() => {
    if (isSupportedLanguage) {
      setLanguage(lang);
    }
  }, [isSupportedLanguage, lang, setLanguage]);

  useSeo({
    title: t("seo.galleryTitle"),
    description: t("seo.galleryDescription"),
    lang: language,
  });

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex - 1 + galleryItems.length) % galleryItems.length;
    });
  }, [hasItems, galleryItems.length]);

  const showNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % galleryItems.length;
    });
  }, [hasItems, galleryItems.length]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, showPrevious, showNext]);

  const activeItem = isModalOpen ? galleryItems[activeIndex] : null;

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

  if (!isSupportedLanguage) {
    return <Navigate to="/en" replace />;
  }

  return (
    <Layout>
      <section className="mx-auto my-12 max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
          <h1 className="text-center text-2xl font-semibold uppercase tracking-wide text-[#3E2E23] md:text-4xl">
            {t("gallery.pageTitle")}
          </h1>
          <span aria-hidden="true" className="h-px flex-1 bg-softBrown/35" />
        </div>

        <div className="mb-6">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
                return;
              }
              navigate(`/${language}#gallery`);
            }}
            className="cta-unified"
          >
            ← {t("faq.backButton")}
          </button>
        </div>

        {hasItems && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.image}
                role="button"
                tabIndex={0}
                className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 focus-visible:rounded-xl"
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(62,46,35,0.08)] transition-all duration-300 group-hover:shadow-[0_8px_28px_rgba(62,46,35,0.12)] group-hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.alt || t("gallery.workAlt")}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </article>
            ))}
          </div>
        )}

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
              onClick={(event) => event.stopPropagation()}
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
    </Layout>
  );
}

export default GalleryPage;
