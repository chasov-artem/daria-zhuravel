import { describe, it, expect } from 'vitest'
import { SEO_CONFIG, getAbsoluteUrl } from '../config/seo'

describe('SEO config', () => {
  it('exports SITE_URL', () => {
    expect(SEO_CONFIG.SITE_URL).toBeDefined()
    expect(typeof SEO_CONFIG.SITE_URL).toBe('string')
    expect(SEO_CONFIG.SITE_URL).toMatch(/^https?:\/\//)
  })

  it('exports default meta', () => {
    expect(SEO_CONFIG.defaultTitle).toBeDefined()
    expect(SEO_CONFIG.defaultDescription).toBeDefined()
    expect(SEO_CONFIG.defaultImage).toBeDefined()
  })

  it('getAbsoluteUrl returns full URL for path', () => {
    const url = getAbsoluteUrl('/en/faq')
    expect(url).toMatch(/^https?:\/\//)
    expect(url).toContain('/en/faq')
  })

  it('getAbsoluteUrl handles empty path', () => {
    const url = getAbsoluteUrl('')
    expect(url).toBe(SEO_CONFIG.SITE_URL.replace(/\/$/, ''))
  })
})
