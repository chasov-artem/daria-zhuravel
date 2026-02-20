import { useLanguage } from "../context/useLanguage";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-softBrown/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-6 text-sm md:flex-row md:gap-6 md:px-6">
        <div className="flex items-center gap-4">
          <Link
            to={`/${language}#home`}
            className="inline-flex shrink-0 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 focus-visible:rounded"
            aria-label={t("studioName")}
          >
            <img
              src="/studio.png"
              alt={t("studioName")}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p>{t("footer.copyright")}</p>
        </div>
        <div className="flex items-center gap-5 text-xs sm:gap-6 sm:text-sm">
          <Link className="transition-colors hover:text-softBrown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 focus-visible:rounded" to={`/${language}/privacy`}>
            {t("footer.privacy")}
          </Link>
          <Link className="transition-colors hover:text-softBrown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softBrown/60 focus-visible:ring-offset-2 focus-visible:rounded" to={`/${language}/terms`}>
            {t("footer.terms")}
          </Link>
        </div>
        <SocialLinks
          className="text-softBrown"
          iconClassName="h-5 w-5"
          linkClassName="hover:opacity-80"
        />
      </div>
    </footer>
  );
}

export default Footer;
