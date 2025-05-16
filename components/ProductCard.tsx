import Image from 'next/image'

import Link from 'next/link'

import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

import AddToCartButton from './AddToCartButton'
import PriceView from './PriceView'
import Title from './Title'

/**
 * Propiedades para el componente ProductCard.
 * @property {Product} product - Producto a mostrar en la tarjeta.
 */
interface ProductCardProps {
  product: Product
}

/**
 * Componente `ProductCard`
 *
 * Muestra una tarjeta de producto con imagen, nombre, introducción, precio y
 * botón para agregar al carrito. Incluye efectos visuales al pasar el cursor
 * y enlace a la página del producto.
 *
 * @param {ProductCardProps} props - Propiedades del componente
 * @param {Product} props.product - Producto a mostrar en la tarjeta
 * @returns {JSX.Element} Tarjeta de producto con imagen, información y acciones
 *
 * @example
 * <ProductCard product={productData} />
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden group text-sm">
      <div className="overflow-hidden relative bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="Imagen del producto"
              width={500}
              height={500}
              priority
              className={`w-full h-72 object-contain overflow-hidden transition-transform duration-500 ${product?.stock !== 0 && 'group-hover:scale-105'}`}
            />
          </Link>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-md rounded-tl-none rounded-tr-none">
        <Title className="text-base line-clamp-1">{product?.name}</Title>
        <p>{product?.intro}</p>
        <PriceView
          price={product?.price as number}
          discount={product?.discount}
          className="text-lg"
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

export default ProductCard
