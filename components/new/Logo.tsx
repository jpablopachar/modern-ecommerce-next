'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

/**
 * Propiedades para el componente Logo.
 *
 * @property {React.ReactNode} children - Contenido que se mostrará como texto del logo
 * @property {string} [className] - Clases CSS adicionales para personalizar el estilo del logo
 */
interface LogoProps {
  children: React.ReactNode
  className?: string
}

/**
 * Componente `Logo`
 *
 * Renderiza un logo textual que enlaza a la página principal.
 * El componente acepta texto personalizable y estilos adicionales a través de sus props.
 * Por defecto, el logo tiene estilo de texto grande, oscuro, en negrita y mayúsculas.
 *
 * @component
 *
 * @param {LogoProps} props - Propiedades del componente
 * @param {React.ReactNode} props.children - El texto o elementos que conforman el logo
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo
 *
 * @returns {JSX.Element} Elemento JSX que representa el logo con enlace a la página principal
 *
 * @example
 * <Logo>MARCA</Logo>
 *
 * @example
 * <Logo className="text-primary">Mi Tienda</Logo>
 */
const Logo: React.FC<LogoProps> = ({ children, className }) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          'text-2xl text-darkColor font-black tracking-wider uppercase',
          className,
        )}
      >
        {children}
      </h2>
    </Link>
  )
}

export default Logo
