import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAbsoluteUrl, SEO_CONFIG } from '../config/seo'

const DEFAULT_TITLE = SEO_CONFIG.defaultTitle
const DEFAULT_DESCRIPTION = SEO_CONFIG.defaultDescription

export function useSeo({ title, description, lang }) {
  const location = useLocation()

  useEffect(() => {
    document.title = title || DEFAULT_TITLE

    if (lang) {
      document.documentElement.lang = lang === 'ru' ? 'ru' : 'en'
    }

    // Update meta description
    const metaDescription =
      document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', description || DEFAULT_DESCRIPTION)
    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }

    // Update canonical URL for current page
    const canonicalPath = location.pathname || '/en'
    const canonicalUrl = getAbsoluteUrl(canonicalPath)
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)
  }, [description, lang, title, location.pathname])
}
