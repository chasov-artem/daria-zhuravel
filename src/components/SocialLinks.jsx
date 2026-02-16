import { createElement } from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { socialLinks } from '../config/socialLinks'

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
]

function SocialLinks({ className = '', iconClassName = 'h-8 w-8', linkClassName = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {SOCIAL_LINKS.map(({ id, href, label, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
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
