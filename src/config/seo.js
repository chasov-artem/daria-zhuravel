/**
 * SEO Configuration
 * Update SITE_URL when you have your production domain
 */
export const SEO_CONFIG = {
  /** Your production site URL (e.g. https://pulsebeautystudio.co.nz) */
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://www.pulsebeauty-studio.com',

  /** Default meta for social sharing (used in index.html) */
  defaultTitle: 'Electrolysis by Daria Zhuravel | PulseBeauty Studio Auckland',
  defaultDescription:
    'Professional electrolysis services in Auckland, NZ. FDA-approved permanent hair removal. Certified electrologist Daria Zhuravel.',
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
