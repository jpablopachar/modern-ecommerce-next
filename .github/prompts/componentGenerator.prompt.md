# React Component Enhancement Tool

## Meta

This prompt enhances React components by adding proper TypeScript props, comprehensive Spanish JSDoc documentation, and applying ESLint formatting rules. It also translates any English content within JSX tags to Spanish when needed.

## Response Format

The enhanced component should:

- Use TypeScript for props definition with proper interfaces/types
- Include comprehensive JSDoc documentation in Spanish
- Follow project ESLint rules for code formatting
- Translate any English text content inside JSX tags to Spanish
- Maintain the component's original functionality
- Use proper React patterns according to Next.js 15 best practices

For each component, provide:

1. An explanation of the changes made (in English)
2. The enhanced component code (formatted according to ESLint rules)

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

1. **Props Definition**:

   - Create TypeScript interfaces for all props
   - Use descriptive names and add proper types
   - Specify optional vs. required props
   - Place interface above the component declaration

2. **JSDoc Documentation**:

   - Use Spanish for all documentation
   - Include a comprehensive description of the component functionality
   - Document all props with `@param` tags
   - Specify return type with `@returns`
   - Add usage examples when appropriate
   - Document any side effects or important behaviors

3. **Event Handler Documentation**:

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

4. **Code Formatting**:

   - Apply consistent indentation (2 spaces)
   - Use single quotes for strings
   - Apply appropriate spacing between elements
   - Follow ESLint rules for line length, spacing, etc.

5. **Translation Guidelines**:

   - Translate all user-facing text inside JSX tags to Spanish
   - Maintain the meaning and tone of the original content
   - Preserve any technical terms that should not be translated
   - Do not translate props names, variables, or function names

6. **Component Structure**:
   - Maintain separation of concerns
   - Keep the component's original functionality
   - Preserve existing styling and className attributes
   - Follow React best practices for functional components
   - Never add new functionality not present in the original component
