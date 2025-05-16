import { Product } from '@/sanity.types'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

/**
 * Propiedades para el componente ProductCharacteristics.
 * @property {Product} product - El producto del cual se mostrarán las características.
 */
interface ProductCharacteristicsProps {
  product: Product
}

/**
 * Componente `ProductCharacteristics`
 *
 * Muestra las características principales de un producto en un acordeón desplegable,
 * incluyendo marca, colección, tipo, disponibilidad en stock y variante.
 *
 * @param {ProductCharacteristicsProps} props - Propiedades del componente
 * @param {Product} props.product - El producto del cual se mostrarán las características
 * @returns {JSX.Element} Acordeón con las características del producto
 *
 * @example
 * <ProductCharacteristics product={productData} />
 */
const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({
  product,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">
          {product?.name}
          : Características
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex items-center justify-between">
            Marca:
            {' '}
            <span className="font-semibold tracking-wide">Desconocida</span>
          </p>
          <p className="flex items-center justify-between">
            Colección: 
            {' '}
            <span className="font-semibold tracking-wide">2024</span>
          </p>
          <p className="flex items-center justify-between">
            Tipo:
            {' '}
            <span className="font-semibold tracking-wide">
              {product?.variant}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:
            {' '}
            <span className="font-semibold tracking-wide">
              {product?.stock ? 'Disponible' : 'Agotado'}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Variante:
            {' '}
            <span className="font-semibold tracking-wide">
              {product?.intro}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductCharacteristics
