import Link from 'next/link'

import { categoriesData, quickLinksData } from '@/constants'

import FooterTop from './new/FooterTop'
import Logo from './new/Logo'
import SocialMedia from './new/SocialMedia'

/**
 * Componente `Footer`
 *
 * Pie de página principal del sitio que muestra información de contacto,
 * enlaces rápidos, categorías, formulario de suscripción a boletín y
 * medios sociales. Se organiza en secciones responsivas.
 *
 * @returns {JSX.Element} Pie de página completo con múltiples secciones
 *
 * @example
 * <Footer />
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>Ecommerce</Logo>
            <p className="text-gray-600 text-sm">
              Descubre colecciones de muebles seleccionadas en Ecommerce, combinando
              estilo y comodidad para elevar tus espacios de vida.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Categorías
            </h3>
            <ul className="space-y-3">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category${item?.href}`}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Boletín
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Suscríbete a nuestro boletín para recibir actualizaciones y ofertas exclusivas.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <p>
            ©
            {new Date().getFullYear()}
            {' '}
            Ecommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
