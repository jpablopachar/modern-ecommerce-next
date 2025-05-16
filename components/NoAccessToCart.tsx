'use client'

import { SignInButton, SignUpButton } from '@clerk/nextjs'

import Logo from './new/Logo'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

/**
 * Componente `NoAccessToCart`
 *
 * Muestra una tarjeta de acceso restringido cuando un usuario no autenticado
 * intenta acceder al carrito de compras. Proporciona opciones para iniciar sesión
 * o crear una cuenta nueva mediante Clerk.
 *
 * @returns {JSX.Element} Tarjeta con opciones de autenticación
 *
 * @example
 * <NoAccessToCart />
 */
const NoAccessToCart: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Logo>Ecommerce</Logo>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            ¡Bienvenido de nuevo!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center font-medium">
            Inicia sesión para ver los productos de tu carrito y realizar el
            pago. ¡No te pierdas tus productos favoritos!
          </p>
          <SignInButton mode="modal">
            <Button className="w-full font-semibold" size="lg">
              Iniciar sesión
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            ¿No tienes una cuenta?
          </div>
          <SignUpButton mode="modal">
            <Button variant="outline" className="w-full" size="lg">
              Crear cuenta
            </Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NoAccessToCart
