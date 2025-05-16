import { toast } from 'react-hot-toast'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'
import { Product } from '@/sanity.types'
import useCartStore from '@/store'

/**
 * Propiedades para el componente QuantityButtons.
 */
interface QuantityButtonsProps {
  product: Product
  className?: string
  borderStyle?: string
}

/**
 * Componente `QuantityButtons`
 *
 * Muestra controles para ajustar la cantidad de un producto en el carrito de compras,
 * permitiendo aumentar o disminuir la cantidad y mostrando el conteo actual.
 *
 * @param {QuantityButtonsProps} props - Propiedades del componente
 * @param {Product} props.product - Producto asociado a estos controles
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el componente
 * @param {string} [props.borderStyle] - Estilos de borde específicos
 * @returns {JSX.Element} Controles para ajustar la cantidad de un producto
 */
const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  product,
  className,
  borderStyle,
}) => {
  const { addItem, removeItem, getItemCount } = useCartStore()

  const itemCount = getItemCount(product?._id)
  const isOutOfStock = product?.stock === 0

  /**
   * Maneja la acción de eliminar o reducir la cantidad de un producto.
   *
   * Reduce la cantidad en uno o elimina el producto completamente si solo hay uno.
   * Muestra notificaciones apropiadas según la acción realizada.
   *
   * @returns {void}
   */
  const handleRemoveProduct = (): void => {
    removeItem(product?._id)

    if (itemCount > 1) {
      toast.success('¡Cantidad reducida exitosamente!')
    } else {
      toast.success(
        `${product?.name?.substring(0, 12)} eliminado exitosamente!`,
      )
    }
  }

  return (
    <div
      className={twMerge(
        'flex items-center gap-1 pb-1 text-base',
        borderStyle,
        className,
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6 cursor-pointer"
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
      >
        <HiMinus />
      </Button>
      <span className="font-semibold w-8 text-center text-darkColor">
        {itemCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6 cursor-pointer"
        onClick={() => {
          addItem(product)
          toast.success('¡Cantidad aumentada exitosamente!')
        }}
        disabled={isOutOfStock}
      >
        <HiPlus />
      </Button>
    </div>
  )
}

export default QuantityButtons
