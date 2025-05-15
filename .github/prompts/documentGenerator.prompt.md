# Spanish JSDoc Documentation Generator

## Meta
This prompt generates comprehensive JSDoc documentation in Spanish for NextJS 15 with TypeScript code elements (components, hooks, functions, interfaces, etc.) following best practices and consistent formatting.

## Response Format
The documentation should:
- Use proper JSDoc syntax with /** */ markers
- Include a comprehensive main description of the element's purpose and functionality
- Document all parameters, props, return values, and types
- Follow Spanish language conventions for all descriptions
- Include usage examples when appropriate
- For React components, include prop type definitions and default values

## Warnings
- Documentation should be technically accurate and match the actual behavior of the code
- All descriptions must be in Spanish
- Avoid simply translating English terms when Spanish technical terms exist
- Maintain consistency with existing documentation style across the project
- Do not add implementation details that might become outdated quickly

## Context
This is for a NextJS 15 project with TypeScript that uses:
- React 19+ features
- Functional components and hooks
- Zustand for state management
- Tanstack Query for data fetching
- Styled Components for styling
- Strong typing with TypeScript

## Example Input Format

```typescript
// Code element to document (component, hook, interface, etc.)
```

## Example Output Format

```typescript
/**
 * Componente `[Nombre del Componente]`
 *
 * Componente que muestra [descripción de la funcionalidad principal].
 *
 * @component
 * ```
 *
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Descripción de la propiedad name
 * @param {boolean} props.isActive - Indica si el componente está activo
 * @param {() => void} props.onClick - Función a ejecutar cuando se hace clic en el componente
 * @returns {JSX.Element} Elemento JSX que representa el componente
 */
```

## Instructions for API-related Documentation

For API utilities or data fetching functions:
- Document input parameters in detail
- Specify expected return types including Promise structures
- Note any side effects
- Document error handling expectations
- Include usage within React components

## Instructions for Hook Documentation

For custom React hooks:
- Document initialization parameters
- Explain returned values and their types
- Describe dependencies and side effects
- Include cleanup procedures if applicable
- Provide context for when to use the hook

## Instructions for Component Documentation

For components:
- Document all props and their types
- Explain component lifecycle behavior
- Detail any context dependencies
- Note any performance optimizations
- Document accessibility considerations
