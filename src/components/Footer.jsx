import { useLanguage } from '../context/useLanguage'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'

function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="border-t border-softBrown/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row md:px-6">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <Link className="hover:text-softBrown" to={`/${language}/privacy`}>
            {t('footer.privacy')}
          </Link>
          <Link className="hover:text-softBrown" to={`/${language}/terms`}>
            {t('footer.terms')}
          </Link>
        </div>
        <SocialLinks
          className="text-softBrown"
          iconClassName="h-5 w-5"
          linkClassName="hover:opacity-80"
        />
      </div>
    </footer>
  )
}

export default Footer
