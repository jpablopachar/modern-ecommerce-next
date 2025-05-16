import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Category } from '@/sanity.types'

/**
 * Propiedades para el componente HeaderMenu.
 */
interface HeaderMenuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any
}

/**
 * Componente `HeaderMenu`
 *
 * Muestra la navegación principal en el encabezado del sitio con enlaces a la página
 * de inicio, categorías disponibles y la tienda. Resalta visualmente la página actual.
 *
 * @param {HeaderMenuProps} props - Propiedades del componente
 * @param {CATEGORIES_QUERYResult} props.categories - Lista de categorías para generar los enlaces
 * @returns {JSX.Element} Menú de navegación principal
 */
const HeaderMenu: React.FC<HeaderMenuProps> = ({ categories }) => {
  const pathname = usePathname()

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold text-lightColor">
      <Link
        href={'/'}
        className={`hover:text-darkColor hoverEffect relative group ${
          pathname === '/' && 'text-darkColor'
        }`}
      >
        Inicio
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
            pathname === '/' && 'w-1/2'
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
            pathname === '/' && 'w-1/2'
          }`}
        />
      </Link>
      {categories?.map((category: Category) => (
        <Link
          key={category?._id}
          href={`/category/${category?.slug?.current}`}
          className={`hover:text-darkColor hoverEffect relative group ${
            pathname === `/category/${category?.slug?.current}` &&
            'text-darkColor'
          }`}
        >
          {category?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
              pathname === `/category/${category?.slug?.current}` && 'w-1/2'
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
              pathname === `/category/${category?.slug?.current}` && 'w-1/2'
            }`}
          />
        </Link>
      ))}
      <Link
        href={'/shop'}
        className={`hover:text-darkColor hoverEffect relative group ${
          pathname === '/shop' && 'text-darkColor'
        }`}
      >
        Tienda
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
            pathname === '/shop' && 'w-1/2'
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
            pathname === '/shop' && 'w-1/2'
          }`}
        />
      </Link>
    </div>
  )
}

export default HeaderMenu
