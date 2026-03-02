/**
 * SEO Configuration
 * Update SITE_URL when you have your production domain
 */
export const SEO_CONFIG = {
  /** Your production site URL (e.g. https://pulsebeautystudio.co.nz) */
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://www.pulsebeauty-studio.com',

  /** Default meta for social sharing (used in index.html) */
  defaultTitle: 'Electrolysis Auckland | Permanent Hair Removal | PulseBeauty Studio',
  defaultDescription:
    'Electrolysis in Auckland. Professional permanent hair removal for face, underarms, legs, bikini. FDA-approved. Certified electrologist Daria Zhuravel | PulseBeauty Studio.',
  defaultImage: '/daria_zhuravel.webp',
  siteName: 'PulseBeauty Studio',
  locale: 'en_NZ',
  localeAlternates: ['ru_NZ'],
}

export function getAbsoluteUrl(path = '') {
  const base = SEO_CONFIG.SITE_URL.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
