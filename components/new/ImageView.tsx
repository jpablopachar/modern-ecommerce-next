'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { useState } from 'react'

import { urlFor } from '@/sanity/lib/image'

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from '@/sanity.types'

/**
 * Propiedades para el componente `ImageView`.
 *
 * Define la estructura de las imágenes que serán visualizadas por el componente, permitiendo una
 * lista opcional de objetos de imagen con metadatos asociados.
 *
 * @property {Array<Object>} [images] - Lista opcional de imágenes a mostrar. Cada imagen incluye:
 * @property {Object} [images[].asset] - Referencia al recurso de imagen en Sanity.
 * @property {string} images[].asset._ref - Referencia única al recurso de imagen.
 * @property {'reference'} images[].asset._type - Tipo de referencia, siempre 'reference'.
 * @property {boolean} [images[].asset._weak] - Indica si la referencia es débil (opcional).
 * @property {'sanity.imageAsset'} [images[].asset.[internalGroqTypeReferenceTo]] - Tipo interno de
 * referencia a imagen en Sanity (opcional).
 * @property {SanityImageHotspot} [images[].hotspot] - Información de hotspot para el recorte
 * focalizado de la imagen (opcional).
 * @property {SanityImageCrop} [images[].crop] - Información de recorte de la imagen (opcional).
 * @property {'image'} images[]._type - Tipo de objeto, siempre 'image'.
 * @property {string} images[]._key - Clave única de la imagen.
 */
interface ImageViewProps {
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
}

/**
 * Componente `ImageView`
 *
 * Muestra un visor de imágenes con una imagen principal y miniaturas seleccionables.
 * Incluye animación al cambiar entre imágenes y efectos hover.
 *
 * @param {ImageViewProps} props - Propiedades del componente
 * @param {Array<Object>} [props.images] - Lista de imágenes a mostrar. Cada imagen incluye:
 * @param {Object} [props.images[].asset] - Referencia al recurso de imagen en Sanity.
 * @param {string} images[].asset._ref - Referencia única al recurso de imagen.
 * @param {string} images[].asset._type - Tipo de referencia, siempre 'reference'.
 * @param {boolean} [images[].asset._weak] - Indica si la referencia es débil (opcional).
 * @param {string} [images[].asset.[internalGroqTypeReferenceTo]] - Tipo interno de
 * referencia a imagen en Sanity (opcional).
 * @param {SanityImageHotspot} [images[].hotspot] - Información de hotspot para el recorte
 * focalizado de la imagen (opcional).
 * @param {SanityImageCrop} [images[].crop] - Información de recorte de la imagen (opcional).
 * @param {string} images[]._type - Tipo de objeto, siempre 'image'.
 * @param {string} images[]._key - Clave única de la imagen.
 * @returns {JSX.Element} Visor de imágenes con imagen principal y miniaturas
 *
 * @example
 * <ImageView images={productImages} />
 */
const ImageView: React.FC<ImageViewProps> = ({ images = [] }) => {
  const [active, setActive] = useState(images[0])

  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden"
        >
          {active && (
            <Image
              src={urlFor(active).url()}
              alt="productImage"
              width={700}
              height={700}
              priority
              className="w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md"
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 gap-2 h-20 md:h-28">
        {images.map((image) => (
          <button
            key={image._key}
            onClick={() => setActive(image)}
            className={`border rounded-md overflow-hidden hover:cursor-pointer ${
              active?._key === image._key ? 'ring-1 ring-darkColor' : ''
            }`}
          >
            <Image
              src={urlFor(image).url()}
              alt={`Miniatura ${image._key}`}
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageView
