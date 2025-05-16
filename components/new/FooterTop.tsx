import { contactItems } from './FooterTopData'

/**
 * Propiedades para el componente ContactItem.
 */
interface ContactItemProps {
  icon: React.ReactNode
  title: string
  content: string
}

/**
 * Componente `ContactItem`
 *
 * Muestra un elemento individual de información de contacto con icono,
 * título y contenido.
 *
 * @param {ContactItemProps} props - Propiedades del componente
 * @param {React.ReactNode} props.icon - Icono a mostrar
 * @param {string} props.title - Título del item de contacto
 * @param {string} props.content - Contenido o subtítulo del item
 * @returns {JSX.Element} Item de contacto individual
 */
const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">
          {content}
        </p>
      </div>
    </div>
  )
}

/**
 * Componente `FooterTop`
 *
 * Muestra información de contacto en la parte superior del pie de página,
 * organizada en una cuadrícula responsive.
 *
 * @returns {JSX.Element} Sección superior del pie de página con items de contacto.
 */
const FooterTop: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {contactItems.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.subtitle}
        />
      ))}
    </div>
  )
}

export default FooterTop
