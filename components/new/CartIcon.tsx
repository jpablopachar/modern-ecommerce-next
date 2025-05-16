'use client'

import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

import useCartStore from '@/store'

/**
 * Componente `CartIcon`
 *
 * Muestra un icono de carrito de compras con un contador que indica
 * la cantidad de productos añadidos al carrito. Funciona como un enlace
 * a la página del carrito y muestra visualmente la cantidad de artículos.
 *
 * @returns {JSX.Element} Icono del carrito de compras con contador
 */
const CartIcon: React.FC = () => {
  const { items } = useCartStore()

  return (
    <Link href={'/cart'} className="group relative">
      <ShoppingBag className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  )
}

export default CartIcon
