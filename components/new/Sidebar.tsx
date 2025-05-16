/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useOutsideClick } from '@/hooks'
// import { CATEGORIES_QUERYResult } from '@/sanity.types'

import Logo from './Logo'
import SocialMedia from './SocialMedia'

/**
 * Propiedades para el componente Sidebar.
 * @property {boolean} isOpen - Indica si la barra lateral está abierta o cerrada.
 * @property {() => void} onClose - Función para cerrar la barra lateral.
 * @property {CATEGORIES_QUERYResult} categories - Lista de categorías para mostrar en la
 * navegación.
 */
interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  // categories: CATEGORIES_QUERYResult
  categories: any
}

/**
 * Componente `Sidebar`
 *
 * Muestra una barra lateral de navegación con animación que contiene el logo,
 * enlaces a categorías y redes sociales. Se cierra cuando se hace clic fuera
 * del área de la barra lateral o en el botón de cierre.
 *
 * @param {SidebarProps} props - Propiedades del componente
 * @param {boolean} props.isOpen - Indica si la barra lateral está abierta o cerrada
 * @param {() => void} props.onClose - Función para cerrar la barra lateral
 * @param {CATEGORIES_QUERYResult} props.categories - Lista de categorías para mostrar en la
 * navegación
 * @returns {JSX.Element} Barra lateral con navegación principal
 *
 * @example
 * <Sidebar
 *   isOpen={sidebarOpen}
 *   onClose={closeSidebar}
 *   categories={categoriesList}
 * />
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, categories }) => {
  const pathname = usePathname()

  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-darkColor/50 shadow-xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-darkColor h-full text-primary-foreground p-10 border-r border-r-hoverColor/30 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white">Ecommerce</Logo>
          <button
            onClick={onClose}
            className="hover:text-red-500 hoverEffect cursor-pointer"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide text-zinc-400">
          <Link
            onClick={onClose}
            href={'/'}
            className={`hover:text-white hoverEffect ${
              pathname === `/` && 'text-white'
            }`}
          >
            Inicio
          </Link>
          {categories?.map((item: any) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={`/category/${item?.slug?.current}`}
              className={`hover:text-white hoverEffect ${
                pathname === `/category/${item?.slug?.current}` && 'text-white'
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  )
}

export default Sidebar
