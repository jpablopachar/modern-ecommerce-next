import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Propiedades para el componente Title.
 *
 * @property {ReactNode} children - Elementos hijos que se mostrarán dentro del título.
 * @property {string} [className] - Clase CSS opcional para personalizar el estilo del título.
 */
interface TitleProps {
  children: ReactNode
  className?: string
}

/**
 * Componente `Title`.
 *
 * Componente que renderiza un título de nivel 2 con estilos predeterminados y permite la
 * personalización mediante clases adicionales.
 *
 * @component
 *
 * @param {Object} props - Propiedades del componente Title
 * @param {React.ReactNode} props.children - Contenido que se mostrará dentro del título
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del título
 * 
 * @returns {JSX.Element} Un elemento JSX que representa un título
 * de nivel 2 con estilos personalizados.
 * 
 * @example
 * return <Title className="text-red-500">Este es un título personalizado</Title>
 */
const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={twMerge('text-2xl font-semibold', className)}>{children}</h2>
  )
}

export default Title
