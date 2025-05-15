'use client'

import { useEffect } from 'react'

/**
 * Tipo para extender el objeto Window con la configuración del chatbot
 */
interface ChatbotWindow extends Window {
  chatbotConfig?: [string, string, { apiHost: string }]
}

/**
 * Componente `ChatIcon`
 *
 * Integra un chatbot AI de Sendbird en la aplicación. Este componente carga
 * dinámicamente el script del chatbot y crea un contenedor para renderizarlo.
 * No requiere props ya que la configuración está integrada en el componente mismo.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa un div vacío,
 * el chatbot se renderiza mediante script
 *
 * @example
 * <ChatIcon />
 */
const ChatIcon: React.FC = () => {
  /**
   * Elimina el elemento `<div>` con el identificador 'aichatbot' del DOM.
   *
   * Esta función busca un elemento con el ID 'aichatbot' en el documento y, si existe,
   * lo elimina del cuerpo del documento (`document.body`). No
   * realiza ninguna acción si el elemento no se encuentra.
   *
   * @function
   * @returns {void} No retorna ningún valor.
   */
  const removeChatbotDiv = (): void => {
    const div = document.getElementById('aichatbot')

    if (div) {
      document.body.removeChild(div)
    }
  }

  /**
   * Función que inicializa el chatbot Sendbird
   *
   * Crea un contenedor div para el chatbot, configura las opciones necesarias
   * y carga el script del chatbot de forma asíncrona.
   *
   * @param {ChatbotWindow} w - Objeto window extendido con la configuración del chatbot
   * @param {Document} d - Objeto document del DOM
   * @param {string} s - Tipo de elemento script
   * @param {string[]} args - Argumentos de configuración para el chatbot
   */
  const initializeChatbot = (
    w: ChatbotWindow,
    d: Document,
    s: string,
    ...args: [string, string, { apiHost: string }]
  ): void => {
    // Crear y añadir el div contenedor del chatbot
    const div = d.createElement('div')

    div.id = 'aichatbot'

    d.body.appendChild(div)

    // Asignar la configuración del chatbot al objeto window
    w.chatbotConfig = args

    // Localizar la primera etiqueta script e insertar el script del chatbot
    const f = d.getElementsByTagName(s)[0]
    const j = d.createElement(s) as HTMLScriptElement

    j.defer = true
    j.type = 'module'
    j.src = 'https://aichatbot.sendbird.com/index.js'

    f.parentNode?.insertBefore(j, f)
  }

  useEffect(() => {
    // Invocar la función que inicializa el chatbot con los mismos parámetros
    initializeChatbot(
      window as ChatbotWindow,
      document,
      'script',
      'BAB7C759-C70C-45ED-9987-414B76B81F37',
      'dTtiij56YxTvc-eKxEMnJ',
      {
        apiHost:
          'https://api-BAB7C759-C70C-45ED-9987-414B76B81F37.sendbird.com',
      },
    )

    return removeChatbotDiv
  }, [])

  return <div />
}

export default ChatIcon
