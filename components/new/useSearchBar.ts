import { useCallback, useEffect, useState } from 'react'

import { client } from '@/sanity/lib/client'

import { Product } from '@/sanity.types'

/**
 * Interfaz `SearchBarHook`
 *
 * Define la estructura del hook personalizado para la barra de
 * búsqueda, gestionando el estado de la búsqueda, los productos
 * filtrados y la visibilidad del componente de búsqueda.
 *
 * @property {string} search - Texto actual ingresado en la barra de búsqueda.
 * @property {(search: string) => void} setSearch - Función para actualizar el valor de búsqueda.
 * @property {Product[]} products - Lista de productos filtrados según el término de búsqueda.
 * @property {boolean} loading - Indica si la búsqueda o filtrado de productos está en proceso.
 * @property {boolean} showSearch - Indica si la barra de búsqueda está visible.
 * @property {(showSearch: boolean) => void} setShowSearch - Función
 * para mostrar u ocultar la barra de búsqueda.
 */
interface SearchBarHook {
  search: string
  setSearch: (search: string) => void
  products: Product[]
  loading: boolean
  showSearch: boolean
  setShowSearch: (showSearch: boolean) => void
}

/**
 * Hook personalizado `useSearchBar`
 *
 * Proporciona funcionalidad de búsqueda de productos con manejo de estado.
 * Gestiona el término de búsqueda, los resultados de productos, estados de carga
 * y la visibilidad del diálogo de búsqueda.
 *
 * @returns {SearchBarHook} Un objeto que contiene las siguientes propiedades:
 * - `search`: El término de búsqueda actual.
 * - `setSearch`: Función para actualizar el término de búsqueda.
 * - `products`: Lista de productos encontrados.
 * - `loading`: Indica si la búsqueda está en progreso.
 * - `showSearch`: Estado de visibilidad del diálogo de búsqueda.
 * - `setShowSearch`: Función para actualizar la visibilidad del diálogo.
 */
const useSearchBar = (): SearchBarHook => {
  const [search, setSearch] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  /**
   * Obtiene productos desde Sanity basados en el término de búsqueda.
   *
   * Consulta la base de datos de Sanity para encontrar productos cuyo nombre
   * coincida con el texto de búsqueda. Si el término de búsqueda está vacío,
   * limpia los resultados.
   *
   * @returns {Promise<void>} Promesa que se resuelve cuando se completa la búsqueda
   */
  const fetchProducts = useCallback(async (): Promise<void> => {
    if (!search) {
      setProducts([])

      return
    }

    setLoading(true)

    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`
      const params = { search: `${search}*` }
      const response = await client.fetch(query, params)

      setProducts(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }, [search])

  // Aplica debounce a los cambios de entrada para reducir llamadas a la API
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [search, fetchProducts])

  return {
    search,
    setSearch,
    products,
    loading,
    showSearch,
    setShowSearch,
  }
}

export default useSearchBar
