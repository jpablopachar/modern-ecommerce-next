'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'

import useCartStore from '@/store'

/**
 * Componente `CartIcon`
 *
 * Muestra un icono de carrito de compras con información sobre la cantidad de
 * productos agregados. Sirve como enlace a la página del carrito y maneja
 * correctamente la hidratación para evitar errores de renderizado.
 *
 * @returns {JSX.Element | null} Icono del carrito con contador de productos o null durante
 * la hidratación
 */
const CartIcon: React.FC = () => {
  const groupedItems = useCartStore((state) => state.getGroupedItems())

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Link
      href={'/cart'}
      className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
    >
      <MdOutlineShoppingCart className="text-2xl text-darkBlue" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">
            {groupedItems?.length ? groupedItems.length : 0}
            {' '}
          </span>
          artículos
        </p>
        <p className="font-semibold">Carrito</p>
      </div>
    </Link>
  )
}

export default CartIcon
