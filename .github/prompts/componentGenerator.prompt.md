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

For each component, provide:

1. An explanation of the changes made (in English)
2. The enhanced component code (formatted according to ESLint rules)
3. If applicable, the separate data file code

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

## Example of Component with Internal Subcomponent

### Input:

```tsx
const ProfileCard = () => {
  const ProfileHeader = ({ name, title }) => {
    return (
      <div className="header">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    )
  }

  return (
    <div className="profile-card">
      <ProfileHeader name="John Doe" title="Software Engineer" />
      <div className="body">
        <p>Experienced developer with 5 years of experience.</p>
      </div>
    </div>
  )
}

export default ProfileCard
```

### Output:

```tsx
'use client'

/**
 * Propiedades para el componente ProfileHeader.
 */
interface ProfileHeaderProps {
  name: string
  title: string
}

/**
 * Componente `ProfileHeader`
 *
 * Muestra el encabezado de una tarjeta de perfil con nombre y título profesional.
 * Este componente se utiliza internamente dentro de ProfileCard.
 *
 * @param {ProfileHeaderProps} props - Propiedades del componente
 * @param {string} props.name - Nombre a mostrar en el encabezado
 * @param {string} props.title - Título o cargo profesional
 * @returns {JSX.Element} Encabezado de la tarjeta de perfil
 */
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title }) => {
  return (
    <div className="header">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  )
}

/**
 * Componente `ProfileCard`
 *
 * Muestra una tarjeta de perfil profesional con encabezado y cuerpo.
 *
 * @returns {JSX.Element} Tarjeta de perfil completa
 */
const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <ProfileHeader name="John Doe" title="Ingeniero de Software" />
      <div className="body">
        <p>Desarrollador experimentado con 5 años de experiencia.</p>
      </div>
    </div>
  )
}

export default ProfileCard
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
 * Muestra una lista de características destacadas del servicio.
 *
 * @returns {JSX.Element} Lista de características renderizada.
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
 * @returns {JSX.Element} Sección superior del pie de página con items de contacto.
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

## Example Input

```tsx
const ProductCard = () => {
  return (
    <div className="product-card">
      <h3>Featured Product</h3>
      <p>This is an awesome product you should buy.</p>
      <button onClick={() => handleAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard
```

## Example Output

```tsx
'use client'

/**
 * Componente `ProductCard`
 *
 * Muestra una tarjeta de producto destacado con título, descripción y botón
 * para añadir al carrito de compras.
 *
 * @component
 *
 * @returns {JSX.Element} Elemento JSX que representa una tarjeta de producto.
 *
 * @example
 * <ProductCard />
 */
const ProductCard: React.FC = () => {
  /**
   * Maneja la acción de añadir un producto al carrito.
   *
   * Realiza una solicitud al servidor para agregar el producto seleccionado
   * al carrito de compras del usuario actual.
   *
   * @param {Product} product - El producto que se va a añadir al carrito
   * @returns {void}
   */
  const handleAddToCart = (product: Product): void => {
    // Implementation
  }

  return (
    <div className="product-card">
      <h3>Producto Destacado</h3>
      <p>Este es un producto increíble que deberías comprar.</p>
      <button onClick={() => handleAddToCart(product)}>
        Añadir al carrito
      </button>
    </div>
  )
}

export default ProductCard
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

2. **Props Definition**:

   - Create TypeScript interfaces for all props (internal and main components)
   - Use descriptive names and add proper types
   - Specify optional vs. required props
   - Place interface definitions before their respective component declarations

3. **JSDoc Documentation**:

   - Use Spanish for all documentation
   - Include a comprehensive description of the component functionality
   - Document all props with `@param` tags
   - Specify return type with `@returns`
   - Add usage examples when appropriate
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

5. **Data Separation**:

   - Identify and extract static data like arrays, objects, configurations, etc.
   - Create a new file named `ComponentNameData.tsx` in the same directory
   - Define appropriate TypeScript interfaces for all data structures
   - Document all interfaces and data with JSDoc comments in Spanish
   - Export the data with proper typing
   - Import the data in the main component file
   - Translate any text content in the data to Spanish when appropriate
   - Only extract truly static data – leave dynamic state or computed values in the main component

6. **Code Formatting**:

   - Apply consistent indentation (2 spaces)
   - Use single quotes for strings
   - Apply appropriate spacing between elements
   - Follow ESLint rules for line length, spacing, etc.

7. **Translation Guidelines**:

   - Translate all user-facing text inside JSX tags to Spanish
   - Translate user-facing text in data files to Spanish
   - Maintain the meaning and tone of the original content
   - Preserve any technical terms that should not be translated
   - Do not translate props names, variables, or function names
