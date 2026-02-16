export const freshaBaseUrl = 'https://www.fresha.com/a/real-studio-profile'

const buildFreshaLink = (medium, campaign) => {
  const url = new URL(freshaBaseUrl)
  url.searchParams.set('utm_source', 'site')
  url.searchParams.set('utm_medium', medium)

  if (campaign) {
    url.searchParams.set('utm_campaign', campaign)
  }

  return url.toString()
}

export const freshaLinks = {
  header: buildFreshaLink('header_button'),
  hero: buildFreshaLink('hero_button'),
  general: buildFreshaLink('general'),
  face: buildFreshaLink('service_card', 'face'),
  underarms: buildFreshaLink('service_card', 'underarms'),
  legs: buildFreshaLink('service_card', 'legs'),
  bikini: buildFreshaLink('service_card', 'bikini'),
}
