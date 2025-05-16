import { Category } from '@/sanity.types'

import CategorySelector from './ui/category-selector'

/**
 * Propiedades para el componente Categories.
 * @property {Category[]} categories - Lista de categorías disponibles para mostrar.
 */
interface CategoriesProps {
  categories: Category[]
}

/**
 * Componente `Categories`
 *
 * Contenedor que envuelve el selector de categorías y proporciona
 * un espaciado vertical adecuado.
 *
 * @param {CategoriesProps} props - Propiedades del componente
 * @param {Category[]} props.categories - Lista de categorías disponibles para mostrar
 * @returns {JSX.Element} Contenedor con el selector de categorías
 *
 * @example
 * <Categories categories={categoriesList} />
 */
const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="py-5">
      <CategorySelector categories={categories} />
    </div>
  )
}

export default Categories
