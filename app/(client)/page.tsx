import Container from '@/components/Container'
import HomeBanner from '@/components/new/HomeBanner'
import ProductGrid from '@/components/ProductGrid'

/**
 * Componente `Home`
 *
 * Página principal del sitio e-commerce que muestra un banner promocional
 * y una cuadrícula de productos destacados. Utiliza un contenedor principal
 * para mantener el diseño responsivo y coherente.
 *
 * @returns {JSX.Element} Página de inicio con banner y productos destacados
 */
const Home: React.FC = () => {
  return (
    <Container className="py-10">
      <HomeBanner />
      <ProductGrid />
    </Container>
  )
}

export default Home
