import { useEffect } from 'react'

const DEFAULT_TITLE = 'Electrolysis Studio'
const DEFAULT_DESCRIPTION = 'Professional electrolysis services with personalized care.'

export function useSeo({ title, description, lang }) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE

    if (lang) {
      document.documentElement.lang = lang
    }

    const metaDescription =
      document.querySelector('meta[name="description"]') || document.createElement('meta')

    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', description || DEFAULT_DESCRIPTION)

    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }
  }, [description, lang, title])
}
