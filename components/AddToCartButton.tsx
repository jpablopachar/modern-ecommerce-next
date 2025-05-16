'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import PriceFormatter from '@/components/PriceFormatter'
import QuantityButtons from '@/components/QuantityButtons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import useCartStore from '@/store'

/**
 * Propiedades para el componente AddToCartButton.
 *
 * @property {Product} product - El producto que se agregará al carrito.
 * @property {string} [className] - Clase CSS opcional para personalizar el estilo del botón.
 */
interface AddToCartButtonProps {
  product: Product
  className?: string
}

/**
 * Componente `AddToCartButton`
 *
 * Muestra un botón para agregar productos al carrito o controles de cantidad
 * si el producto ya está en el carrito. Incluye información de subtotal cuando
 * hay productos agregados.
 *
 * @param {AddToCartButtonProps} props - Propiedades del componente
 * @param {Product} props.product - Producto a agregar al carrito
 * @param {string} [props.className] - Clases adicionales para el botón
 * @returns {JSX.Element | null} Botón o controles de cantidad del producto
 */
const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
}) => {
  const { addItem, getItemCount } = useCartStore()

  const [isClient, setIsClient] = useState(false)

  const itemCount = getItemCount(product?._id)
  const isOutOfStock = product?.stock === 0

  const handleAddItem = (): void => {
    addItem(product)

    toast.success(`${product?.name?.substring(0, 12)}... añadido exitosamente!`)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="w-full h-12 flex items-center">
      {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Cantidad</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddItem}
          disabled={isOutOfStock}
          className={cn(
            'w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white cursor-pointer hoverEffect',
            className,
          )}
        >
          Añadir al carrito
        </Button>
      )}
    </div>
  )
}

export default AddToCartButton
