'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Propiedades para el componente NoProductAvailable.
 *
 * @property {string} selectedTab - Pestaña o categoría seleccionada actualmente
 * @property {string} [className] - Clases CSS adicionales para personalizar el contenedor
 */
interface NoProductAvailableProps {
  selectedTab: string
  className?: string
}

/**
 * Componente `NoProductAvailable`
 *
 * Muestra un mensaje animado cuando no hay productos disponibles para la categoría
 * o filtro seleccionado. Incluye animaciones suaves para mejorar la experiencia
 * de usuario y proporciona información sobre cuándo revisar nuevamente.
 *
 * @component
 *
 * @param {NoProductAvailableProps} props - Propiedades del componente
 * @param {string} props.selectedTab - La categoría o filtro seleccionado actualmente
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo
 *
 * @returns {JSX.Element} Elemento JSX que representa el mensaje de productos no disponibles
 *
 * @example
 * <NoProductAvailable selectedTab="Camisetas" />
 */
const NoProductAvailable: React.FC<NoProductAvailableProps> = ({
  selectedTab,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          No Hay Productos Disponibles
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600"
      >
        Lo sentimos, pero no hay productos que coincidan con el criterio
        {' '}
        <span className="text-base font-semibold text-darkColor">
          {selectedTab}
        </span>
        {' '}
        en este momento.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex items-center space-x-2 text-blue-600"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Estamos reabasteciendo pronto</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-gray-500"
      >
        Por favor, vuelva más tarde o explore nuestras otras categorías de
        productos.
      </motion.p>
    </div>
  )
}

export default NoProductAvailable
