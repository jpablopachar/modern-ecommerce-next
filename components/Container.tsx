import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Propiedades para el componente Container.
 * @property {ReactNode} children - Contenido que será envuelto por el contenedor.
 * @property {string} [className] - Clases CSS adicionales para personalizar el contenedor.
 */
interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Componente `Container`
 *
 * Proporciona un contenedor responsivo con ancho máximo y padding horizontal
 * consistente. Centraliza el contenido en la página y permite agregar clases
 * CSS adicionales.
 *
 * @param {ContainerProps} props - Propiedades del componente
 * @param {ReactNode} props.children - Contenido que será envuelto por el contenedor
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el contenedor
 * @returns {JSX.Element} Contenedor con el contenido proporcionado
 * 
 * @example
 * <Container className="bg-gray-100">
 *   <h1 className="text-xl">Hola Mundo</h1>
 * </Container>
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Container
