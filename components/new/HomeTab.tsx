'use client'

import { Repeat } from 'lucide-react'

import { productTypes } from '@/constants'

/**
 * Propiedades para el componente HomeTab
 *
 * @property {string} selectedTab - Tab actualmente seleccionada
 * @property {(tab: string) => void} onTabSelect - Función para manejar la selección de tabs
 */
interface HomeTabProps {
  selectedTab: string
  onTabSelect: (tab: string) => void
}

/**
 * Componente `HomeTab`
 *
 * Muestra una barra de pestañas horizontales que permite al usuario filtrar productos
 * por categoría. Incluye un botón de repetición/reinicio para volver al estado inicial.
 *
 * @component
 *
 * @param {HomeTabProps} props - Propiedades del componente
 * @param {string} props.selectedTab - Tab actualmente seleccionada que se destaca visualmente
 * @param {(tab: string) => void} props.onTabSelect - Función que se ejecuta al seleccionar una tab
 *
 * @returns {JSX.Element} Elemento JSX que representa la barra de pestañas
 *
 * @example
 * <HomeTab
 *   selectedTab="Camisetas"
 *   onTabSelect={(tab) => setSelectedTab(tab)}
 *   productTypes={[{title: "Camisetas"}, {title: "Pantalones"}]}
 * />
 */
const HomeTab: React.FC<HomeTabProps> = ({ selectedTab, onTabSelect }) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productTypes?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white cursor-pointer hoverEffect ${
              selectedTab === item?.title && 'bg-darkColor text-white'
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <button className="border border-darkColor px-2 py-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  )
}

export default HomeTab
