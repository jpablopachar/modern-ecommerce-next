import Title from '../Title'

/**
 * Componente `HomeBanner`
 *
 * Componente funcional que muestra un banner destacado en la página principal,
 * presentando el título de la colección y una breve descripción promocional.
 * Utiliza estilos responsivos y centrados para resaltar el contenido principal.
 *
 * @component
 *
 * @returns {JSX.Element} Elemento JSX que representa el banner principal de la página de inicio.
 *
 * @example
 * <HomeBanner />
 */
const HomeBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="uppercase text-3xl md:text-4xl font-bold text-center">
        Mejor Colección de Ropa
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px] ">
        Encuentra todo lo que necesitas para verte y sentirte bien, y compra los
        últimos productos de moda y estilo de vida para hombres.
      </p>
    </div>
  )
}

export default HomeBanner
