import { FaRegEye } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import { RiShoppingBag4Line } from 'react-icons/ri'
import { TbArrowsRightLeft } from 'react-icons/tb'

/**
 * Componente `ProductCartBar`
 *
 * Muestra una barra horizontal con iconos de acciones relacionadas con productos,
 * incluyendo: añadir a favoritos, vista rápida, comparar y añadir al carrito.
 * Cada icono se presenta en un contenedor con efectos al pasar el cursor.
 *
 * @returns {JSX.Element} Barra de acciones de producto con iconos interactivos
 *
 * @example
 * <ProductCartBar />
 */
const ProductCartBar: React.FC = () => {
  return (
    <div className="text-gray-500 text-lg flex items-center justify-center gap-2.5">
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <MdFavoriteBorder />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <FaRegEye />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <TbArrowsRightLeft />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect">
        <RiShoppingBag4Line />
      </div>
    </div>
  )
}

export default ProductCartBar
