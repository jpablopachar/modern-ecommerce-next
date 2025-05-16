import { twMerge } from 'tailwind-merge'

/**
 * Propiedades para el componente PriceFormatter.
 */
interface PriceFormatterProps {
  amount: number
  className?: string
}

/**
 * Componente `PriceFormatter`
 *
 * Formatea un valor numérico como precio en formato de moneda (USD),
 * utilizando el formato local con el símbolo de dólar y dos decimales.
 *
 * @param {PriceFormatterProps} props - Propiedades del componente
 * @param {number} props.amount - El valor numérico a formatear como precio
 * @param {string} [props.className] - Clases CSS adicionales para el contenedor
 * @returns {JSX.Element} Elemento de texto con el precio formateado
 *
 * @example
 * <PriceFormatter amount={19.99} />
 * // Muestra: $19.99
 *
 * @example
 * <PriceFormatter amount={1200} className="text-lg text-red-500" />
 * // Muestra: $1,200.00 con estilos personalizados
 */
const PriceFormatter: React.FC<PriceFormatterProps> = ({
  amount,
  className,
}) => {
  const formattedPrice = new Number(amount).toLocaleString('es-ES', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 2,
  })

  return (
    <span
      className={twMerge('text-sm font-semibold text-darkColor', className)}
    >
      {formattedPrice}
    </span>
  )
}

export default PriceFormatter
