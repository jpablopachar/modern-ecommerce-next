import { Clock, Mail, MapPin, Phone } from 'lucide-react'

/**
 * Interfaz que define la estructura de un elemento de contacto.
 */
interface ContactItemData {
  title: string
  subtitle: string
  icon: React.ReactNode
}

/**
 * Datos de los elementos de contacto mostrados en el pie de página superior.
 */
export const contactItems: ContactItemData[] = [
  {
    title: 'Visítanos',
    subtitle: 'Nueva Orleans, EE.UU.',
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Llámanos',
    subtitle: '+12 958 648 597',
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Horario',
    subtitle: 'Lun - Sáb: 10:00 AM - 7:00 PM',
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Envíanos un correo',
    subtitle: 'tulos@gmail.com',
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
]
