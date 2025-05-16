/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { defineQuery } from 'next-sanity'

import { sanityFetch } from '../lib/live'

/**
 * Obtiene todos los productos desde la base de datos de Sanity, ordenados alfabéticamente
 * por nombre.
 *
 * @async
 * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de productos. Si ocurre un
 * error, retorna un arreglo vacío.
 * @throws No lanza excepciones; en caso de error, captura y retorna un arreglo vacío.
 */
export const getAllProducts = async (): Promise<any[]> => {
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
 * @param {number} [quantity] - (Opcional) Número máximo de categorías a obtener. Si no se
 * especifica, se obtienen todas.
 * @returns {Promise<any[]>} Una promesa que resuelve con un arreglo de categorías o un arreglo
 * vacío si ocurre un error.
 */
export const getAllCategories = async (quantity?: number): Promise<any> => {
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

/**
 * Obtiene las órdenes asociadas a un usuario específico desde Sanity.
 *
 * Esta función realiza una consulta a la base de datos de Sanity para recuperar todas las órdenes
 * cuyo `clerkUserId` coincide con el `userId` proporcionado. Devuelve un arreglo con los datos de
 * las órdenes,
 * incluyendo los productos asociados a cada una.
 *
 * @async
 * @function
 * @param {string} userId - Identificador único del usuario cuyas órdenes se desean obtener. Es
 * obligatorio.
 * @returns {Promise<any[]>} Promesa que resuelve a un arreglo de órdenes. Si ocurre un error o
 * no existen órdenes, retorna un arreglo vacío.
 *
 * @throws {Error} Lanza un error si no se proporciona el `userId`.
 *
 * @example
 * ```typescript
 * const misOrdenes = await getMyOrders('usuario123');
 * ```
 */
export const getMyOrders = async (userId: string): Promise<any> => {
  if (!userId) {
    throw new Error('User ID is required')
  }
  const MY_ORDERS_QUERY =
    defineQuery(`*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){
    ...,products[]{
      ...,product->
    }
  }`)

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    })

    return orders?.data || []
  } catch (error) {
    console.error('Error fetching orders:', error)

    return []
  }
}
