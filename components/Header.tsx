import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { ListOrdered } from 'lucide-react'
import Link from 'next/link'

import { getMyOrders } from '@/sanity/helpers'

import Container from './Container'
import CartIcon from './new/CartIcon'
// import HeaderMenu from './new/HeaderMenu'
import Logo from './new/Logo'
// import MobileMenu from './new/MobileMenu'
import SearchBar from './new/SearchBar'

/**
 * Componente `Header`
 *
 * Encabezado principal de la aplicación que muestra el logo, menú de navegación,
 * buscador, carrito de compras, acceso a pedidos y opciones de usuario.
 * Se adapta a dispositivos móviles con un menú específico para pantallas pequeñas.
 *
 * @returns {JSX.Element} Encabezado completo con logo, menú y opciones de usuario
 *
 * @example
 * <Header />
 */
const Header: React.FC = async () => {
  const user = await currentUser()
  const { userId } = await auth()
  let orders = null

  if (userId) {
    orders = await getMyOrders(userId)
  }

  // const categories = await getAllCategories(3)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-b-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        {/* <HeaderMenu categories={categories} /> */}
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          {/* <MobileMenu categories={categories} /> */}
          <Logo>Ecommerce</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <SignedIn>
            <Link href={'/orders'} className="group relative">
              <ListOrdered className="group-hover:text-darkColor hoverEffect" />
              <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          </SignedIn>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && (
              <Link
                href="/signin"
                className="text-sm font-semibold hover:text-darkColor hoverEffect"
              >
                Iniciar sesión
              </Link>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
