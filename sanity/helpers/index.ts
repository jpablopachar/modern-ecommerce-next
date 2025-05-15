import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../lib/live'

/**
 * Obtiene todos los productos desde la base de datos de Sanity, ordenados alfabéticamente por nombre.
 *
 * @async
 * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de productos. Si ocurre un error, retorna un arreglo vacío.
 * @throws No lanza excepciones; en caso de error, captura y retorna un arreglo vacío.
 */
export const getAllProducts = async () => {
  const PRODUCTS_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`)

  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
    })

    return products.data || []
  } catch (error) {
    console.log('Error fetching all products:', error)

    return []
  }
}

/**
 * Obtiene todas las categorías desde Sanity, ordenadas alfabéticamente por nombre.
 * 
 * @param {number} [quantity] - (Opcional) Número máximo de categorías a obtener. Si no se especifica, se obtienen todas.
 * @returns {Promise<any[]>} Una promesa que resuelve con un arreglo de categorías o un arreglo vacío si ocurre un error.
 */
export const getAllCategories = async (quantity?: number) => {
  const CATEGORIES_QUERY = `*[_type=="category"] | order(name asc)${quantity ? `[0...${quantity}]` : ''}`

  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    })

    return categories?.data || []
  } catch (error) {
    console.error('Error fetching all categories:', error)

    return []
  }
}
