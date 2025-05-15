import { RefObject, useEffect, useRef } from 'react'

/**
 * Hook personalizado que detecta clics fuera de un elemento referenciado y ejecuta un callback.
 *
 * @template T - Tipo del elemento HTML referenciado.
 * @param callback - Función que se ejecuta cuando se detecta un clic fuera del elemento
 * referenciado.
 * @returns Un objeto RefObject que debe ser asignado al elemento que se desea monitorear.
 */
export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback])

  return ref
}
