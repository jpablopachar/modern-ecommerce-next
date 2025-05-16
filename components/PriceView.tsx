import { twMerge } from 'tailwind-merge'

import PriceFormatter from '@/components/PriceFormatter'

/**
 * Propiedades para el componente PriceView.
 * @property {number} price - El precio actual del producto.
 * @property {number} [discount] - Porcentaje de descuento aplicado (opcional).
 * @property {string} [className] - Clases CSS adicionales para personalizar la visualización.
 */
interface PriceViewProps {
  price: number
  discount?: number
  className?: string
}

/**
 * Componente `PriceView`
 *
 * Muestra el precio de un producto con formato adecuado, y opcionalmente
 * el precio original tachado cuando hay un descuento aplicado.
 *
 * @param {PriceViewProps} props - Propiedades del componente
 * @param {number} props.price - El precio actual del producto
 * @param {number} [props.discount] - Porcentaje de descuento aplicado (opcional)
 * @param {string} [props.className] - Clases CSS adicionales para personalizar la visualización
 * @returns {JSX.Element} Visualización del precio con posible precio tachado si hay descuento
 *
 * @example
 * <PriceView price={19.99} discount={15} className="text-lg" />
 * // Muestra el precio con descuento (19.99) y el precio original tachado
 *
 * @example
 * <PriceView price={29.99} />
 * // Muestra solo el precio sin descuento aplicado
 */
const PriceView: React.FC<PriceViewProps> = ({
  price,
  discount,
  className,
}) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className={className} />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className={twMerge(
              'line-through text-xs font-medium text-zinc-500',
              className,
            )}
          />
        )}
      </div>
    </div>
  )
}

export default PriceView
