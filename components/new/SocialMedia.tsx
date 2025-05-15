'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { socialLink } from './SocialMediaData'

/**
 * Interfaz para las propiedades del componente SocialMedia
 */
interface SocialMediaProps {
  /** Clase CSS adicional para el contenedor principal */
  className?: string
  /** Clase CSS adicional para los iconos */
  iconClassName?: string
  /** Clase CSS adicional para los tooltips */
  tooltipClassName?: string
}

/**
 * Componente `SocialMedia`
 *
 * Muestra una lista horizontal de enlaces a redes sociales con iconos y tooltips.
 * Cada enlace se muestra con un icono dentro de un borde circular y muestra
 * un tooltip con el nombre de la red social al hacer hover.
 *
 * @component
 * @param {SocialMediaProps} props - Las propiedades del componente
 * @param {string} [props.className] - Clase CSS adicional para el contenedor principal
 * @param {string} [props.iconClassName] - Clase CSS adicional para los iconos
 * @param {string} [props.tooltipClassName] - Clase CSS adicional para los tooltips
 * @returns {JSX.Element} Elemento JSX que representa los enlaces a redes sociales
 *
 * @example
 * <SocialMedia
 *   className="mt-4"
 *   iconClassName="border-white"
 *   tooltipClassName="bg-dark"
 * />
 */
const SocialMedia: React.FC<SocialMediaProps> = ({
  className,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5 text-zinc-400', className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-white hoverEffect',
                  iconClassName,
                )}
              >
                {item.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'bg-white text-darkColor font-semibold',
                tooltipClassName,
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
