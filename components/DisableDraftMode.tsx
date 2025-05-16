'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

/**
 * Componente `DisableDraftMode`
 *
 * Muestra un botón que permite desactivar el modo borrador (draft mode) de Sanity.
 * Este componente solo es visible cuando se está visualizando el sitio en el entorno
 * "live" o "unknown",
 * pero no cuando se está usando la herramienta de presentación de Sanity.
 *
 * @returns {JSX.Element | null} Botón para desactivar el modo borrador o null si no debe mostrarse
 *
 * @example
 * <DisableDraftMode />
 */
const DisableDraftMode: React.FC = () => {
  const environment = useDraftModeEnvironment()
  const router = useRouter()

  // Solo muestra el botón para desactivar el modo borrador cuando se está fuera de la herramienta
  // de presentación
  if (environment !== 'live' && environment !== 'unknown') {
    return null
  }

  /**
   * Maneja el clic en el botón para desactivar el modo borrador.
   *
   * Realiza una petición al endpoint que desactiva el modo borrador y
   * actualiza la página para reflejar los cambios.
   *
   * @returns {Promise<void>}
   */
  const handleClick = async (): Promise<void> => {
    await fetch('/draft-mode/disable')

    router.refresh()
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50 text-black hover:text-white hoverEffect"
    >
      Desactivar Modo Borrador
    </Button>
  )
}

export default DisableDraftMode
