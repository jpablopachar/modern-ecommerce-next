/* eslint-disable no-console */

'use client'

import { useEffect, useState } from 'react'

/**
 * Interfaz para las propiedades del componente Chat
 */
interface ChatProps {
  pageId: string
  appId: string
}

/**
 * Declaración global para TypeScript reconociendo el SDK de Facebook
 */
declare global {
  interface Window {
    fbAsyncInit: () => void
    FB: {
      init: (params: { appId: string; xfbml: boolean; version: string }) => void
      CustomerChat: {
        show: () => void
        hide: () => void
      }
    }
  }
}

/**
 * Componente `Chat`
 *
 * Integra el chat de Facebook Messenger en la aplicación, permitiendo
 * a los usuarios interactuar directamente con el servicio de atención al cliente.
 *
 * @component
 * @param {ChatProps} props - Las propiedades del componente
 * @param {string} props.pageId - ID de la página de Facebook para el chat
 * @param {string} props.appId - ID de la aplicación de Facebook
 * @returns {JSX.Element} Elemento JSX que representa el componente de chat
 *
 * @example
 * <Chat
 *   pageId="123456789012345"
 *   appId="987654321098765"
 * />
 */
const Chat: React.FC<ChatProps> = ({ pageId, appId }) => {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    /**
     * Función de inicialización del SDK de Facebook
     *
     * Se ejecuta cuando el SDK de Facebook ha sido cargado completamente.
     */
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: appId,
        xfbml: true,
        version: 'v17.0',
      })

      setIsSDKLoaded(true)
    }

    /**
     * Carga el SDK de Facebook si aún no está cargado
     *
     * Agrega el script del SDK de Facebook al DOM y gestiona los eventos de éxito y error.
     */
    const loadSDK = (): void => {
      if (document.getElementById('facebook-jssdk')) {
        return
      }

      const js = document.createElement('script')

      js.id = 'facebook-jssdk'
      js.src = `https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v17.0&appId=${appId}`
      js.async = true

      js.onload = () => console.log('SDK de Facebook cargado correctamente')

      js.onerror = (err): void => {
        console.error('Error al cargar el SDK de Facebook:', err)

        setError(
          'Error al cargar Facebook Messenger. Por favor, intenta refrescar la página.',
        )
      }

      document.body.appendChild(js)
    }

    loadSDK()
  }, [appId])

  useEffect(() => {
    /**
     * Muestra el chat cuando el SDK está cargado
     */
    if (isSDKLoaded && window.FB && window.FB.CustomerChat) {
      window.FB.CustomerChat.show()
    }
  }, [isSDKLoaded])

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        data-attribution="biz_inbox"
        data-page_id={pageId}
      ></div>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-2 rounded-md shadow-lg z-50">
          {error}
        </div>
      )}
    </>
  )
}

export default Chat
