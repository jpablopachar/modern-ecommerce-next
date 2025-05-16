/* eslint-disable camelcase */

'use client'

import { Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

import { productTypes } from '@/constants'
import { PRODUCTS_QUERYResult } from '@/sanity.types'
import { client } from '@/sanity/lib/client'

import HomeTab from './new/HomeTab'

import NoProductAvailable from './new/NoProductAvailable'
import ProductCard from './ProductCard'

/**
 * Componente `ProductGrid`
 *
 * Muestra una cuadrícula de productos filtrados por tipo, con pestañas para
 * cambiar entre diferentes categorías. Incluye estados de carga y mensajes
 * cuando no hay productos disponibles.
 *
 * @returns {JSX.Element} Cuadrícula de productos con filtros por categoría
 *
 * @example
 * <ProductGrid />
 */
const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<PRODUCTS_QUERYResult>([])
  const [loading, setLoading] = useState(false)
  const [selectedTab, setSelectedTab] = useState(productTypes[0]?.title || '')

  const query = `*[_type == "product" && variant == $variant] | order(name asc)`
  const params = { variant: selectedTab.toLowerCase() }

  useEffect(() => {
    /**
     * Obtiene productos desde Sanity basados en la pestaña seleccionada.
     *
     * @returns {Promise<void>}
     */
    const fetchData = async (): Promise<void> => {
      setLoading(true)
      try {
        const response = await client.fetch(query, params)

        setProducts(await response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error al cargar productos', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab])

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTab selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Cargando productos...</span>
          </motion.div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          <>
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  )
}

export default ProductGrid
