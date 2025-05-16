'use client'

import { Loader2 } from 'lucide-react'
import { motion } from 'motion/react'

import Logo from './new/Logo'

/**
 * Componente `Loading`
 *
 * Muestra una pantalla de carga a pantalla completa con el logotipo de la aplicación
 * y un indicador de carga animado. Se utiliza para mostrar al usuario que la aplicación
 * está procesando una tarea o cargando datos.
 *
 * @returns {JSX.Element} Pantalla de carga a pantalla completa con animación
 *
 * @example
 * <Loading />
 */
const Loading: React.FC = () => {
  return (
    <div className="fixed min-h-screen w-full bg-white left-0 top-0 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-1">
        <Logo>Ecommerce</Logo>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center space-x-2 text-green-800"
        >
          <Loader2 className="animate-spin" />
          <span className="font-semibold tracking-wide">
            Ecommerce está cargando...
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Loading
