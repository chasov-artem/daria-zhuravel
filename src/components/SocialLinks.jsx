import { createElement } from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { socialLinks } from '../config/socialLinks'

function getEmailHref(email) {
  if (typeof email !== 'string') return ''
  const value = email.trim()
  if (!value) return ''
  if (value.toLowerCase().startsWith('mailto:')) return value
  return `mailto:${value}`
}

function getGmailComposeHref(email) {
  if (typeof email !== 'string') return ''
  const value = email.trim().replace(/^mailto:/i, '')
  if (!value) return ''
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(value)}`
}

function handleEmailClick(event, email) {
  const mailtoHref = getEmailHref(email)
  const gmailHref = getGmailComposeHref(email)

  if (!mailtoHref && !gmailHref) return

  event.preventDefault()

  if (gmailHref) {
    const openedWindow = window.open(gmailHref, '_blank', 'noopener,noreferrer')
    if (openedWindow) return
  }

  if (mailtoHref) {
    window.location.href = mailtoHref
  }
}

function EmailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6.75h16c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3.5 8.25 7.56 5.1c.57.39 1.31.39 1.88 0l7.56-5.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    id: 'instagram',
    href: socialLinks.instagram,
    label: 'Instagram',
    Icon: FaInstagram,
  },
  {
    id: 'facebook',
    href: socialLinks.facebook,
    label: 'Facebook',
    Icon: FaFacebookF,
  },
  {
    id: 'telegram',
    href: socialLinks.telegram,
    label: 'Telegram',
    Icon: FaTelegramPlane,
  },
  {
    id: 'email',
    href: getGmailComposeHref(socialLinks.email) || getEmailHref(socialLinks.email),
    emailValue: socialLinks.email,
    label: 'Email',
    Icon: EmailIcon,
  },
]

function SocialLinks({ className = '', iconClassName = 'h-8 w-8', linkClassName = '' }) {
  const linksToRender = SOCIAL_LINKS.filter(({ href }) => Boolean(href))

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {linksToRender.map(({ id, href, emailValue, label, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={id === 'email' ? (event) => handleEmailClick(event, emailValue) : undefined}
          aria-label={label}
          className={`inline-flex items-center justify-center text-softBrown transition hover:scale-105 hover:text-[#8C6447] ${linkClassName}`.trim()}
        >
          {createElement(Icon, { className: iconClassName })}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
