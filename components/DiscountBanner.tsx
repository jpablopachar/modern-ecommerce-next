/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'

// import { SALE_QUERYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

/**
 * Propiedades para el componente DiscountBanner.
 * @property {SALE_QUERYResult} sales - Lista de promociones o descuentos a mostrar en el carrusel.
 */
interface DiscountBannerProps {
  // sales: SALE_QUERYResult
  sales: any
}

/**
 * Componente `DiscountBanner`
 *
 * Muestra un carrusel de banners promocionales con ofertas y descuentos especiales.
 * Cada elemento del carrusel incluye detalles como título, descripción, porcentaje
 * de descuento, código de cupón e imagen promocional.
 *
 * @param {DiscountBannerProps} props - Propiedades del componente
 * @param {SALE_QUERYResult} props.sales - Lista de promociones o descuentos a mostrar
 * en el carrusel
 * @returns {Promise<JSX.Element>} Carrusel con banners promocionales
 *
 * @example
 * <DiscountBanner sales={salesData} />
 */
const DiscountBanner: React.FC<DiscountBannerProps> = async ({
  sales,
}) => {
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto mt-10 mb-5">
      <CarouselContent>
        {sales.map((sale: any) => (
          <CarouselItem key={sale?._id}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 p-6 md:px-12">
                    <Badge
                      variant="secondary"
                      className="mb-2 md:mb-4 text-darkBlue capitalize"
                    >
                      {sale?.badge} 
                      {' '}
                      {sale?.discountAmount}
                      % descuento
                    </Badge>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4">
                      {sale.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {sale?.description}
                    </p>
                    <p className="mb-4">
                      Usa el código:
                      {' '}
                      <span className="font-semibold text-darkColor uppercase">
                        {sale.couponCode}
                      </span>
                      {' '}
                      para
                      {' '}
                      <span className="font-semibold">
                        {sale?.discountAmount}
                        %
                      </span>
                      {' '}
                      de DESCUENTO
                    </p>
                    <Button>Comprar Ahora</Button>
                  </div>

                  {sale?.image && (
                    <div className="w-full md:w-1/2 h-auto relative flex items-center justify-center py-2">
                      <Image
                        src={urlFor(sale?.image).url()}
                        alt={'imagenBanner'}
                        width={500}
                        height={500}
                        priority
                        className="h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" />
      <CarouselNext className="absolute right-2" />
    </Carousel>
  )
}

export default DiscountBanner
