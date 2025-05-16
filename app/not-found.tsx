import Link from 'next/link'

import Logo from '@/components/new/Logo'

/**
 * Componente `NotFoundPage`
 *
 * Página que se muestra cuando se intenta acceder a una ruta que no existe.
 * Proporciona enlaces de navegación para que el usuario pueda volver a la
 * página de inicio o acceder a la ayuda.
 *
 * @returns {JSX.Element} Página de error 404 (No encontrado)
 */
const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white relative min-h-screen">
      <div className="h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Logo>Ecommerce</Logo>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              ¿Buscas algo?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Lo sentimos. La dirección web que ingresaste no corresponde a una
              página existente en nuestro sitio.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-xs space-y-4">
              <Link
                href="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-darkBlue/80 hover:bg-darkBlue focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-amazonOrangeDark hoverEffect"
              >
                Ir a la página de inicio de Ecommerce
              </Link>
              <Link
                href="/help"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazonBlue bg-white hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue"
              >
                Ayuda
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Necesitas ayuda? Visita la
              {' '}
              <Link
                href="/help"
                className="font-medium text-amazon-blue hover:text-blue-800"
              >
                sección de Ayuda
              </Link>
              {' '}
              o
              {' '}
              <Link
                href="/contact"
                className="font-medium text-amazon-blue hover:text-blue-800"
              >
                contáctanos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
