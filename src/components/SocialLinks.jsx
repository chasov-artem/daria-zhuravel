import { createElement } from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { socialLinks } from '../config/socialLinks'

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
    href: socialLinks.email ? `mailto:${socialLinks.email}` : '',
    label: 'Email',
    Icon: EmailIcon,
  },
]

function SocialLinks({ className = '', iconClassName = 'h-8 w-8', linkClassName = '' }) {
  const linksToRender = SOCIAL_LINKS.filter(({ href }) => Boolean(href))

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {linksToRender.map(({ id, href, label, Icon }) => (
        <a
          key={id}
          href={href}
          target={id === 'email' ? undefined : '_blank'}
          rel={id === 'email' ? undefined : 'noreferrer'}
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
