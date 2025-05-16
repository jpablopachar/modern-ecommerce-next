import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Product } from '@/sanity.types'

/**
 * Interfaz `CartItem`
 *
 * Representa un elemento dentro del carrito de compras, asociando un producto específico con la
 * cantidad seleccionada por el usuario.
 *
 * @property {Product} product - Producto agregado al carrito.
 * @property {number} quantity - Cantidad del producto seleccionada.
 */
interface CartItem {
  product: Product
  quantity: number
}

/**
 * Interfaz `CartStoreHook`
 *
 * Define la estructura del estado y las acciones principales del carrito de compras en la tienda
 * global.
 *
 * @property {CartItem[]} items - Lista de productos actualmente en el carrito.
 * @property {(product: Product) => void} addItem - Función para agregar un producto al carrito.
 */
interface CartStoreHook {
  items: CartItem[]
  addItem: (product: Product) => void
  getItemCount: (productId: string) => number
}

/**
 * Hook de Zustand `useCartStore`
 *
 * Hook de estado global para gestionar el carrito de compras en la aplicación.
 * Permite almacenar y manipular los productos agregados al carrito, persistiendo su estado en el
 * almacenamiento local del navegador.
 *
 * @hook
 *
 * @returns {{
 *   items: Array<{ product: any; quantity: number }>,
 *   addItem: (product: any) => void
 * }} Objeto con la lista de productos en el carrito y la función para agregar productos.
 *
 * @example
 * const { items, addItem } = useCartStore();
 * addItem(productoSeleccionado);
 *
 * @details
 * - El estado del carrito se persiste bajo la clave `cart-store`.
 * - Cada vez que se agrega un producto, se añade con cantidad inicial de 1.
 */
const useCartStore = create<CartStoreHook>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set((state) => ({ items: [...state.items, { product, quantity: 1 }] })),
      getItemCount: (productId) => {
        const item = get().items.find((currentItem) => currentItem.product._id === productId)

        return item ? item.quantity : 0
      },
    }),
    { name: 'cart-store' },
  ),
)

export default useCartStore
