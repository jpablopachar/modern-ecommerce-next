import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import { ReactNode } from 'react'

/**
 * Interfaz para los elementos de enlaces sociales
 */
interface SocialLinkItem {
  title: string
  href: string
  icon: ReactNode
}

/**
 * Lista de enlaces a redes sociales con sus respectivos iconos
 */
export const socialLink: SocialLinkItem[] = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: 'Github',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: 'Linkedin',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: 'Slack',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: <Slack className="w-5 h-5" />,
  },
]
