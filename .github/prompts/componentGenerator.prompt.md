# React Component Enhancement Tool

## Meta

This prompt enhances React components by adding proper TypeScript props, comprehensive Spanish JSDoc documentation, and applying ESLint formatting rules. It also translates any English content within JSX tags to Spanish when needed. Additionally, it separates component data into dedicated Data files when appropriate and properly structures internal components.

## Response Format

The enhanced component should:

- Use TypeScript for props definition with proper interfaces/types
- Include comprehensive JSDoc documentation in Spanish
- Follow project ESLint rules for code formatting
- Translate any English text content inside JSX tags to Spanish
- Maintain the component's original functionality
- Use proper React patterns according to Next.js 15 best practices
- When applicable, extract component data into a separate ComponentNameData.tsx file
- Position internal component definitions and their interfaces before the main component
- Extract business logic to custom hooks when it exceeds 35 lines of code

For each component, provide:

1. An explanation of the changes made (in English)
2. The enhanced component code (formatted according to ESLint rules)
3. If applicable, the separate data file code
4. If applicable, the custom hook file code

## Warnings

- Do not alter import statements unless necessary for TypeScript props
- Do not change the component's functionality or behavior
- Only translate text content inside JSX tags, not variable names, props, or comments
- Maintain any existing className attributes and styling
- Preserve component naming conventions
- Do not modify external dependencies or import new ones unless strictly necessary
- Follow the existing project structure and patterns
- **Do not implement or add any functions, methods, or features that are not present in the original component**
- **Strictly maintain the original component's behavior - only add TypeScript types, JSDoc, and translate existing text**
- **If the original component doesn't include certain handlers or methods, do not invent or add them**

## Context

This enhancement tool is for a Next.js 15 project with TypeScript that uses:

- React 19+ features and functional components
- TypeScript for strong typing
- ESLint for code formatting
- JSDoc documentation in Spanish
- Various UI libraries and styled components

## Component Structure Guidelines

The recommended structure for components with internal subcomponents is:

1. Import statements
2. Interface definitions for internal component props
3. Internal component implementations with JSDoc documentation
4. Interface definitions for main component props (if any)
5. Main component implementation with JSDoc documentation
6. Export statement

This follows the pattern shown in `FooterTop.tsx`, where internal components are defined before the main component that uses them.

## Interface Documentation Guidelines

When documenting interfaces:

- Add a JSDoc comment that includes a general description and property-specific documentation
- Document each property with `@property` tags, including type information
- Mark optional properties with square brackets around the name
- Use a more compact format without nested indentation for property descriptions
- Follow this pattern:

```tsx
/**
 * Propiedades para el componente ComponentName.
 * @property {Type} propertyName - Descripción de la propiedad.
 * @property {AnotherType} [optionalProperty] - Descripción de la propiedad opcional.
 */
interface ComponentNameProps {
  propertyName: Type
  optionalProperty?: AnotherType
}
```

## Component Documentation Guidelines

When documenting components:

- Add a comprehensive JSDoc comment that describes the component's purpose and functionality
- Document all props as parameters with `@param` tags, including their types and descriptions
- Even if props are already defined in an interface, repeat them in the component documentation
- Include a `@returns` tag describing what the component renders
- Add an `@example` section showing how to use the component
- Follow this pattern:

```tsx
/**
 * Componente `ComponentName`
 *
 * Descripción detallada del componente explicando su propósito y funcionalidad.
 *
 * @param {ComponentNameProps} props - Propiedades del componente
 * @param {Type} props.propertyName - Descripción de la propiedad
 * @param {AnotherType} [props.optionalProperty] - Descripción de la propiedad opcional
 * @returns {JSX.Element} Descripción de lo que el componente renderiza
 *
 * @example
 * <ComponentName propertyName="valor" optionalProperty="valorOpcional">
 *   Contenido hijo
 * </ComponentName>
 */
```

## Custom Hook Guidelines

When a component contains business logic that exceeds 35 lines of code, extract it to a custom hook:

1. Create a new file named `useComponentName.ts` in the same directory as the component
2. Move all business logic, state management, and data fetching to the hook
3. Define a clear interface for the hook's return value
4. Document the hook and its interface with JSDoc comments in Spanish
5. Update the component to use the custom hook
6. Follow the pattern shown in `useSearchBar.ts` and `SearchBar.tsx`

### Custom Hook Interface Documentation

```tsx
/**
 * Interfaz `ComponentNameHook`
 *
 * Define la estructura del hook personalizado para el componente ComponentName,
 * gestionando su estado y lógica de negocio.
 *
 * @property {Type} propertyName - Descripción de la propiedad.
 * @property {(value: Type) => void} setPropertyName - Función para actualizar la propiedad.
 * @property {boolean} isLoading - Indica si hay operaciones en proceso.
 */
interface ComponentNameHook {
  propertyName: Type
  setPropertyName: (value: Type) => void
  isLoading: boolean
}
```

### Custom Hook Documentation

```tsx
/**
 * Hook personalizado `useComponentName`
 *
 * Proporciona la lógica de negocio y gestión de estado para el componente ComponentName.
 * [Descripción detallada de lo que hace el hook]
 *
 * @returns {ComponentNameHook} Un objeto que contiene las siguientes propiedades:
 * - `propertyName`: [Descripción de la propiedad]
 * - `setPropertyName`: [Descripción de la función]
 * - `isLoading`: [Descripción del estado de carga]
 */
const useComponentName = (): ComponentNameHook => {
  // Implementation...
}
```

### Example Based on useSearchBar.ts

```typescript
/**
 * Interfaz `SearchBarHook`
 *
 * Define la estructura del hook personalizado para la barra de
 * búsqueda, gestionando el estado de la búsqueda, los productos
 * filtrados y la visibilidad del componente de búsqueda.
 *
 * @property {string} search - Texto actual ingresado en la barra de búsqueda.
 * @property {(search: string) => void} setSearch - Función para actualizar el valor de búsqueda.
 * @property {Product[]} products - Lista de productos filtrados según el término de búsqueda.
 * @property {boolean} loading - Indica si la búsqueda o filtrado de productos está en proceso.
 * @property {boolean} showSearch - Indica si la barra de búsqueda está visible.
 * @property {(showSearch: boolean) => void} setShowSearch - Función para mostrar u ocultar la barra de búsqueda.
 */
interface SearchBarHook {
  search: string
  setSearch: (search: string) => void
  products: Product[]
  loading: boolean
  showSearch: boolean
  setShowSearch: (showSearch: boolean) => void
}

/**
 * Hook personalizado `useSearchBar`
 *
 * Proporciona funcionalidad de búsqueda de productos con manejo de estado.
 * Gestiona el término de búsqueda, los resultados de productos, estados de carga
 * y la visibilidad del diálogo de búsqueda.
 *
 * @returns {SearchBarHook} Un objeto que contiene las siguientes propiedades:
 * - `search`: El término de búsqueda actual.
 * - `setSearch`: Función para actualizar el término de búsqueda.
 * - `products`: Lista de productos encontrados.
 * - `loading`: Indica si la búsqueda está en progreso.
 * - `showSearch`: Estado de visibilidad del diálogo de búsqueda.
 * - `setShowSearch`: Función para actualizar la visibilidad del diálogo.
 */
const useSearchBar = (): SearchBarHook => {
  // Implementation...
}
```

## Example Based on Container.tsx

```tsx
/**
 * Propiedades para el componente Container.
 * @property {ReactNode} children - Contenido que será envuelto por el contenedor.
 * @property {string} [className] - Clases CSS adicionales para personalizar el contenedor.
 */
interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Componente `Container`
 *
 * Proporciona un contenedor responsivo con ancho máximo y padding horizontal
 * consistente. Centraliza el contenido en la página y permite agregar clases
 * CSS adicionales.
 *
 * @param {ContainerProps} props - Propiedades del componente
 * @param {ReactNode} props.children - Contenido que será envuelto por el contenedor
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el contenedor
 * @returns {JSX.Element} Contenedor con el contenido proporcionado
 *
 * @example
 * <Container className="bg-gray-100">
 *   <h1 className="text-xl">Hola Mundo</h1>
 * </Container>
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}
```

## Data Separation Guidelines

When a component includes static data such as lists, configuration objects, or mock data that is used within the component:

1. Create a separate file named `ComponentNameData.tsx` in the same directory as the component
2. Move all static data to this file
3. Export the data with proper TypeScript interfaces or types
4. Import the data in the main component file
5. Follow the pattern shown in `SocialMedia.tsx` and `SocialMediaData.tsx`

### Example of Data Separation

#### Original Component with Embedded Data:

```tsx
const FeatureList = () => {
  const features = [
    { id: 1, title: 'Fast Shipping', description: 'Get your items quickly' },
    {
      id: 2,
      title: 'Secure Payment',
      description: 'Safe transaction guaranteed',
    },
    { id: 3, title: 'Quality Products', description: 'Only the best for you' },
  ]

  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureList
```

#### Enhanced with Data Separation:

FeatureList.tsx:

```tsx
'use client'

import { features } from './FeatureListData'

/**
 * Componente `FeatureList`
 *
 * Muestra una lista de características destacadas del servicio organizadas
 * en una cuadrícula responsiva.
 *
 * @returns {JSX.Element} Lista de características renderizada
 *
 * @example
 * <FeatureList />
 */
const FeatureList: React.FC = () => {
  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureList
```

FeatureListData.tsx:

```tsx
/**
 * Interfaz para definir la estructura de una característica.
 * @property {number} id - Identificador único de la característica.
 * @property {string} title - Título de la característica.
 * @property {string} description - Descripción detallada de la característica.
 */
export interface Feature {
  id: number
  title: string
  description: string
}

/**
 * Lista de características destacadas del servicio.
 */
export const features: Feature[] = [
  {
    id: 1,
    title: 'Envío Rápido',
    description: 'Recibe tus artículos rápidamente',
  },
  {
    id: 2,
    title: 'Pago Seguro',
    description: 'Transacción segura garantizada',
  },
  {
    id: 3,
    title: 'Productos de Calidad',
    description: 'Solo lo mejor para ti',
  },
]
```

## Example Based on FooterTop.tsx Pattern

```tsx
'use client'

import { contactItems } from './FooterTopData'

/**
 * Propiedades para el componente ContactItem.
 * @property {React.ReactNode} icon - Icono a mostrar para el item de contacto.
 * @property {string} title - Título del item de contacto.
 * @property {string} content - Contenido o subtítulo del item de contacto.
 */
interface ContactItemProps {
  icon: React.ReactNode
  title: string
  content: string
}

/**
 * Componente `ContactItem`
 *
 * Muestra un elemento individual de información de contacto con icono,
 * título y contenido.
 *
 * @param {ContactItemProps} props - Propiedades del componente
 * @param {React.ReactNode} props.icon - Icono a mostrar
 * @param {string} props.title - Título del item de contacto
 * @param {string} props.content - Contenido o subtítulo del item
 * @returns {JSX.Element} Item de contacto individual
 *
 * @example
 * <ContactItem
 *   icon={<PhoneIcon />}
 *   title="Teléfono"
 *   content="+34 123 456 789"
 * />
 */
const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

/**
 * Componente `FooterTop`
 *
 * Muestra información de contacto en la parte superior del pie de página,
 * organizada en una cuadrícula responsive.
 *
 * @returns {JSX.Element} Sección superior del pie de página con items de contacto
 *
 * @example
 * <FooterTop />
 */
const FooterTop: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {contactItems.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.subtitle}
        />
      ))}
    </div>
  )
}

export default FooterTop
```

## Example with Component and Custom Hook

### Complex Component Before Enhancement:

```tsx
const ProductSearch = () => {
  // Business logic (over 35 lines)
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Fetch products method
  const fetchProducts = useCallback(async () => {
    if (!searchTerm) return

    setIsLoading(true)
    try {
      // API call to fetch products based on search term and category
      const data = await fetch(
        `/api/products?search=${searchTerm}&category=${selectedCategory?.id || ''}`,
      )
      const response = await data.json()
      setProducts(response)
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      setIsLoading(false)
    }
  }, [searchTerm, selectedCategory])

  // Fetch categories method
  const fetchCategories = async () => {
    try {
      const data = await fetch('/api/categories')
      const response = await data.json()
      setCategories(response)
    } catch (error) {
      console.error('Error fetching categories', error)
    }
  }

  // Clear filters method
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory(null)
  }

  // Initialize categories
  useEffect(() => {
    fetchCategories()
  }, [])

  // Fetch products when search term or category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts()
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory, fetchProducts])

  // Render component
  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products"
      />
      <select
        value={selectedCategory?.id || ''}
        onChange={(e) => {
          const category = categories.find((cat) => cat.id === e.target.value)
          setSelectedCategory(category || null)
        }}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button onClick={clearFilters}>Clear Filters</button>

      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductSearch
```

### Enhanced with Custom Hook (useProductSearch.ts):

```tsx
/**
 * Interfaz `ProductSearchHook`
 *
 * Define la estructura del hook personalizado para la búsqueda de productos,
 * gestionando los términos de búsqueda, categorías, resultados y estados de carga.
 *
 * @property {string} searchTerm - Término de búsqueda actual.
 * @property {(term: string) => void} setSearchTerm - Función para actualizar el término de búsqueda.
 * @property {Product[]} products - Lista de productos filtrados según los criterios.
 * @property {boolean} isLoading - Indica si hay una búsqueda en proceso.
 * @property {Category[]} categories - Lista de categorías disponibles.
 * @property {Category|null} selectedCategory - Categoría seleccionada actualmente.
 * @property {(category: Category|null) => void} setSelectedCategory - Función para seleccionar una categoría.
 * @property {() => void} clearFilters - Función para limpiar todos los filtros aplicados.
 */
interface ProductSearchHook {
  searchTerm: string
  setSearchTerm: (term: string) => void
  products: Product[]
  isLoading: boolean
  categories: Category[]
  selectedCategory: Category | null
  setSelectedCategory: (category: Category | null) => void
  clearFilters: () => void
}

/**
 * Hook personalizado `useProductSearch`
 *
 * Proporciona la funcionalidad para buscar productos por término y categoría,
 * gestionando el estado de la búsqueda, resultados y filtros.
 *
 * @returns {ProductSearchHook} Un objeto que contiene las siguientes propiedades:
 * - `searchTerm`: El término de búsqueda actual.
 * - `setSearchTerm`: Función para actualizar el término de búsqueda.
 * - `products`: Lista de productos que coinciden con los criterios de búsqueda.
 * - `isLoading`: Indica si hay una búsqueda en proceso.
 * - `categories`: Lista de categorías disponibles.
 * - `selectedCategory`: Categoría seleccionada actualmente.
 * - `setSelectedCategory`: Función para seleccionar una categoría.
 * - `clearFilters`: Función para limpiar todos los filtros de búsqueda.
 */
const useProductSearch = (): ProductSearchHook => {
  // Implementation...
}
```

### Enhanced Component (ProductSearch.tsx):

```tsx
'use client'

import useProductSearch from './useProductSearch'

/**
 * Componente `ProductSearch`
 *
 * Proporciona una interfaz para buscar y filtrar productos por términos de búsqueda
 * y categorías. Muestra los resultados en una cuadrícula responsiva.
 *
 * @returns {JSX.Element} Interfaz de búsqueda de productos con resultados
 *
 * @example
 * <ProductSearch />
 */
const ProductSearch: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    products,
    isLoading,
    categories,
    selectedCategory,
    setSelectedCategory,
    clearFilters,
  } = useProductSearch()

  return (
    <div>
      <h2>Búsqueda de Productos</h2>
      {/* Rest of the component with UI only */}
    </div>
  )
}

export default ProductSearch
```

## Instructions for Component Enhancement

When enhancing a React component:

1. **Component Structure**:

   - Place interfaces for internal components first
   - Then define the internal components themselves
   - Follow with interfaces for the main component
   - Then implement the main component
   - Position the export statement at the end
   - Document each component and interface with JSDoc in Spanish
   - Include 'use client' directive for client-side components

2. **Props Definition**:

   - Create TypeScript interfaces for all props (internal and main components)
   - Use descriptive names and add proper types
   - Specify optional vs. required props
   - Place interface definitions before their respective component declarations
   - Document interfaces with proper JSDoc including property descriptions

3. **JSDoc Documentation**:

   - Use Spanish for all documentation
   - Include a comprehensive description of the component functionality
   - Document all props twice:
     - Once in the interface with `@property` tags
     - Again in the component documentation with `@param` tags for each prop
   - Mark optional properties with square brackets around the name
   - Specify return type with `@returns`
   - Add usage examples with `@example` for all components
   - Document any side effects or important behaviors
   - For internal components, mention their relationship with the main component

4. **Event Handler Documentation**:

   - Document all **existing** event handler functions with JSDoc comments in Spanish
   - Do not add new event handlers or functions that are not in the original component
   - Describe the purpose of the function and what it accomplishes
   - Include `@param` tags for all parameters with their types and descriptions
   - Specify return type with `@returns` (typically `void` for event handlers)
   - Explain any side effects or interactions with other parts of the application
   - Follow the pattern shown in the `category-selector.tsx` example:
     ```tsx
     /**
      * Maneja el evento de pulsación de teclas en el campo de entrada.
      *
      * Si el usuario presiona la tecla 'Enter', busca una categoría cuyo título
      * incluya el valor actual del campo de entrada (ignorando mayúsculas/minúsculas).
      * Si encuentra una categoría válida, actualiza el valor seleccionado, cierra el selector
      * y navega a la página de la categoría seleccionada.
      *
      * @param event El evento de teclado generado por el campo de entrada.
      */
     const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
       // Implementation
     }
     ```

5. **Business Logic Extraction**:

   - When a component contains business logic (state management, data fetching, calculations, effects) that exceeds 35 lines, extract it to a custom hook
   - Create a new file named `useComponentName.ts` in the same directory
   - Define an interface for the hook's return value
   - Move all business logic to the hook
   - Keep only UI rendering and simple event handling in the component
   - Document the hook and its interface with JSDoc comments in Spanish
   - Update the component to use the custom hook
   - Follow the pattern shown in `useSearchBar.ts` and similar examples

6. **Data Separation**:

   - Identify and extract static data like arrays, objects, configurations, etc.
   - Create a new file named `ComponentNameData.tsx` in the same directory
   - Define appropriate TypeScript interfaces for all data structures
   - Document interfaces with JSDoc comments including property descriptions
   - Export the data with proper typing
   - Import the data in the main component file
   - Translate any text content in the data to Spanish when appropriate
   - Only extract truly static data – leave dynamic state or computed values in the main component

7. **Code Formatting**:

   - Apply consistent indentation (2 spaces)
   - Use single quotes for strings
   - Apply appropriate spacing between elements
   - Follow ESLint rules for line length, spacing, etc.

8. **Translation Guidelines**:

   - Translate all user-facing text inside JSX tags to Spanish
   - Translate user-facing text in data files to Spanish
   - Maintain the meaning and tone of the original content
   - Preserve any technical terms that should not be translated
   - Do not translate props names, variables, or function names
