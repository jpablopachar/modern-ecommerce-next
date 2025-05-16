import Loading from '@/components/Loading'

/**
 * Componente `loading`
 *
 * Componente funcional que renderiza el indicador de carga global utilizando el
 * componente `Loading`.
 * Se utiliza para mostrar una pantalla de carga mientras se resuelven recursos o
 * datos en la aplicación.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el estado de carga de la aplicación.
 *
 * @example
 * // Uso en una ruta de Next.js para mostrar un loader mientras se cargan los datos
 * export default loading;
 */
const loading: React.FC = () => {
  return <Loading />
}

export default loading
