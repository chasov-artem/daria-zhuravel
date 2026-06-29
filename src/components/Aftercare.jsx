import SocialLinks from "./SocialLinks";
import { useLanguage } from "../context/useLanguage";
import FaqSection from "./FaqSection";
import About from "./About";
import Gallery from "./Gallery";
import Certificates from "./Certificates";
import WorkspacePhotos from "./WorkspacePhotos";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MotionH2 = motion.h2;
const MotionArticle = motion.article;
const MotionDiv = motion.div;

function Aftercare() {
  const { t, language } = useLanguage();
  const description = t("aftercare.description");
  const lines =
    typeof description === "string"
      ? description
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
      : [];
  const isRussian = language === "ru";
  const mapLanguage = isRussian ? "ru" : "en";
  const beforecareImage = isRussian ? "/before-ru.webp" : "/before.webp";
  const aftercareImage = isRussian ? "/after-ru.webp" : "/after.webp";
  const contraindicationImage = isRussian
    ? "/contraindication-ru.webp"
    : "/contraindication.webp";
  const beforecareAlt = isRussian
    ? "Рекомендации перед электроэпиляцией"
    : "Recommendations before electrolysis";
  const aftercareAlt = isRussian
    ? "Рекомендации после электроэпиляции"
    : "Recommendations after electrolysis";
  const contraindicationAlt = isRussian
    ? "Противопоказания к электроэпиляции"
    : "Electrolysis contraindications";

  const [lead, ...rawTips] = lines;
  const tips = rawTips.map((tip) => tip.replace(/^[•-]\s*/, ""));
  const reviews = t("reviews.items");

  return (
    <section id="aftercare" className="my-16 bg-beige scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionH2
          className="mb-6 text-center text-2xl font-semibold md:mb-8 md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("aftercare.title")}
        </MotionH2>

        <div className="space-y-6">
          <MotionArticle
            className="border-b border-softBrown/20 pb-8 pt-6 md:pb-10 md:pt-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.05 },
              },
            }}
          >
            {lead && (
              <motion.p
                className="mb-4 text-base leading-relaxed text-[#5b4737]"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {lead}
              </motion.p>
            )}

            {tips.length > 0 && (
              <motion.ul
                className="space-y-2 text-sm leading-relaxed text-[#5b4737] md:text-base"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[2px] text-softBrown"
                    >
                      •
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </motion.ul>
            )}
            <MotionDiv
              className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14 } },
              }}
            >
              <motion.div
                className="overflow-hidden rounded-lg"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <img
                  src={beforecareImage}
                  alt={beforecareAlt}
                  className="w-full rounded-lg object-contain transition-transform duration-500 ease-out hover:scale-[1.015]"
                />
              </motion.div>
              <motion.div
                className="overflow-hidden rounded-lg"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <img
                  src={aftercareImage}
                  alt={aftercareAlt}
                  className="w-full rounded-lg object-contain transition-transform duration-500 ease-out hover:scale-[1.015]"
                />
              </motion.div>
              <motion.div
                className="overflow-hidden rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <img
                  src={contraindicationImage}
                  alt={contraindicationAlt}
                  className="w-full rounded-lg object-contain transition-transform duration-500 ease-out hover:scale-[1.015]"
                />
              </motion.div>
            </MotionDiv>
          </MotionArticle>

          <About />

          <Gallery />

          <Certificates />

          {Array.isArray(reviews) && reviews.length > 0 && (
            <article
              id="reviews"
              className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-b border-softBrown/20 bg-[#f7f6f4]/80 py-8 scroll-mt-28 md:py-12"
            >
              <div className="mx-auto max-w-6xl px-4 md:px-6">
                <h3 className="testimonials-title mb-8 text-center text-[#574c44] md:mb-10">
                  <span className="testimonials-title-dot" aria-hidden="true" />
                  <span>{t("reviews.title")}</span>
                  <span className="testimonials-title-dot" aria-hidden="true" />
                </h3>
                <Swiper
                  className="testimonials-swiper"
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                  }}
                  speed={1200}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={reviews.length > 1}
                  navigation={{
                    nextEl: ".testimonials-next",
                    prevEl: ".testimonials-prev",
                  }}
                  pagination={{ clickable: true }}
                >
                  {reviews.map((review) => (
                    <SwiperSlide key={`${review.name}-${review.comment}`}>
                      <div className="mx-auto max-w-4xl px-8 pb-8 md:px-16">
                        <p className="mb-4 text-left text-[1.05rem] font-medium uppercase tracking-[0.04em] text-[#6b5f56]">
                          {review.name}
                        </p>
                        <p className="text-left text-[0.97rem] leading-8 text-[#60564e] md:text-[1.02rem]">
                          {review.comment}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="testimonials-prev absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#8c7f74] shadow-sm transition hover:bg-white hover:text-softBrown hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 md:left-7 md:h-14 md:w-14"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="testimonials-next absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#8c7f74] shadow-sm transition hover:bg-white hover:text-softBrown hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 md:right-7 md:h-14 md:w-14"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </article>
          )}

          <motion.article
            id="location"
            className="border-b border-softBrown/20 pb-8 pt-6 scroll-mt-28 md:pb-10 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-4 text-xl font-semibold text-[#3E2E23]">
              {t("location.title")}
            </h3>
            <p className="text-base leading-relaxed text-[#5b4737]">
              {t("location.addressLineOne")}
            </p>
            <p className="mb-4 text-base leading-relaxed text-[#5b4737]">
              {t("location.addressLineTwo")}
            </p>

            <WorkspacePhotos />

            <div className="overflow-hidden rounded-card border border-softBrown/15 bg-white/70">
              <iframe
                title={t("location.mapTitle")}
                src={`https://www.google.com/maps?q=Pakuranga%2C%20Auckland&output=embed&hl=${mapLanguage}`}
                className="h-64 w-full rounded-t-card md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-softBrown/10 bg-white/90 px-3 py-2 text-center text-xs text-[#5b4737] md:text-sm">
                {t("location.mapCaption")}
              </div>
            </div>
          </motion.article>

          <FaqSection />

          <motion.article
            id="contact"
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-4 text-xl font-semibold text-[#3E2E23]">
              {t("social.title")}
            </h3>
            <SocialLinks
              iconClassName="h-10 w-10"
              linkClassName="p-1 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2"
            />
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Aftercare;
