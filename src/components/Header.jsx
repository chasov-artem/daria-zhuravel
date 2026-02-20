import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import SocialLinks from "./SocialLinks";

const NAV_ITEMS = [
  { key: "home", sectionId: "home" },
  { key: "electrolysis", sectionId: "electrolysis" },
  { key: "services", sectionId: "services" },
  { key: "aftercare", sectionId: "aftercare" },
  { key: "about", sectionId: "about" },
  { key: "contact", sectionId: "contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, supportedLanguages, t, changeLanguage } = useLanguage();
  const currentLanguageIndex = supportedLanguages.indexOf(language);
  const nextLanguage =
    supportedLanguages[
      currentLanguageIndex >= 0
        ? (currentLanguageIndex + 1) % supportedLanguages.length
        : 0
    ] ?? "en";

  const handleLanguageChange = (nextLanguage) => {
    changeLanguage(nextLanguage);
    navigate(`/${nextLanguage}`);
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId) => (event) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const targetPath = `/${language}`;
    const targetHash = `#${sectionId}`;

    if (location.pathname !== targetPath) {
      navigate(`${targetPath}${targetHash}`);
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${targetPath}${targetHash}`);
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-softBrown/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link
          to={`/${language}`}
          className="flex shrink-0 items-center gap-3 no-underline"
        >
          <img
            src="/daria-logo.PNG"
            alt="Studio logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src="/studio.png"
            alt={t("studioName")}
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>

        <nav className="hidden flex-1 grid-cols-3 gap-x-4 gap-y-1 px-6 md:grid">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={`/${language}#${item.sectionId}`}
              className="text-xs font-medium hover:text-softBrown"
              onClick={handleSectionNavigation(item.sectionId)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleLanguageChange(nextLanguage)}
            className="rounded-md bg-beige px-2.5 py-1 text-xs font-semibold text-[#3E2E23] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
          >
            {`${language.toUpperCase()} → ${nextLanguage.toUpperCase()}`}
          </button>
        </div>

        <SocialLinks
          className="hidden shrink-0 md:flex"
          iconClassName="h-5 w-5"
          linkClassName="h-9 w-9 rounded-full border border-softBrown/20 bg-white/70 hover:border-softBrown/40"
        />

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-softBrown/20 bg-beige transition hover:bg-white hover:shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-40 border-t border-softBrown/10 bg-white px-4 py-4 shadow-lg transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
          <nav className="mb-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={`/${language}#${item.sectionId}`}
                className="text-xs font-medium"
                onClick={handleSectionNavigation(item.sectionId)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="mb-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleLanguageChange(nextLanguage)}
              className="rounded-md bg-beige px-3 py-1.5 text-xs font-semibold text-[#3E2E23] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            >
              {`${language.toUpperCase()} → ${nextLanguage.toUpperCase()}`}
            </button>
          </div>
      </div>
    </header>
  );
}

export default Header;
