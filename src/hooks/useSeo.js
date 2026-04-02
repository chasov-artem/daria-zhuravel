import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAbsoluteUrl, SEO_CONFIG } from '../config/seo'

const DEFAULT_TITLE = SEO_CONFIG.defaultTitle
const DEFAULT_DESCRIPTION = SEO_CONFIG.defaultDescription
const DEFAULT_IMAGE = getAbsoluteUrl(SEO_CONFIG.defaultImage)

function setTwitterMeta(name, value) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setOgMeta(property, value) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setHreflang(lang, href) {
  let el = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', lang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description, lang, image }) {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = title || DEFAULT_TITLE
    const pageDescription = description || DEFAULT_DESCRIPTION
    const rawPath = location.pathname || '/en'
    const canonicalPath = rawPath === '/' ? '/en' : rawPath
    const pageUrl = getAbsoluteUrl(canonicalPath)
    const pageImage = image ? getAbsoluteUrl(image) : DEFAULT_IMAGE

    document.title = pageTitle

    if (lang) {
      document.documentElement.lang = lang === 'ru' ? 'ru' : 'en'
    }

    // Meta description
    const metaDescription =
      document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', pageDescription)
    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', pageUrl)

    // Open Graph
    setOgMeta('og:title', pageTitle)
    setOgMeta('og:description', pageDescription)
    setOgMeta('og:url', pageUrl)
    setOgMeta('og:image', pageImage)

    // Twitter Card
    setTwitterMeta('twitter:title', pageTitle)
    setTwitterMeta('twitter:description', pageDescription)
    setTwitterMeta('twitter:url', pageUrl)
    setTwitterMeta('twitter:image', pageImage)

    // hreflang for current page (en, ru, x-default)
    const basePath = canonicalPath.replace(/^\/en/, '').replace(/^\/ru/, '') || ''
    const enPath = basePath ? `/en${basePath}` : '/en'
    const ruPath = basePath ? `/ru${basePath}` : '/ru'
    setHreflang('en', getAbsoluteUrl(enPath))
    setHreflang('ru', getAbsoluteUrl(ruPath))
    setHreflang('x-default', getAbsoluteUrl(enPath))
  }, [description, lang, title, image, location.pathname])
}
