# GitHub Copilot Instructions

## Project Overview

This is a modern e-commerce platform built with Next.js 15, TypeScript, and Sanity.io as the CMS. The application follows best practices for accessibility, performance, and SEO. It features a responsive UI, user authentication via Clerk, shopping cart functionality using Zustand for state management, and payment processing through Stripe.

## Package List

Key packages and technologies used in this project:

- **Next.js 15**: React framework with app router for routing and server components
- **TypeScript**: For type safety and better developer experience
- **React 19**: For building the UI with the latest features
- **Sanity.io**: For content management, product catalog, and order management
- **Clerk**: For authentication and user management
- **Zustand**: For global state management (shopping cart)
- **Stripe**: For payment processing
- **TailwindCSS 4**: For styling and responsive design
- **Framer Motion**: For animations and transitions
- **Radix UI**: For accessible UI components with styling via Tailwind
- **Lucide React**: For SVG icons
- **React Hot Toast**: For notifications
- **ESLint & Prettier**: For code quality and formatting

## Architecture Guidelines

1. **Server-First Approach**: Use Server Components whenever possible, reserving Client Components for interactive UI elements.
2. **Component Organization**:
   - Keep components modular and focused on a single responsibility
   - Use the `use client` directive only when necessary
   - Split large components into smaller, reusable ones
3. **State Management**:
   - Use Zustand for global state (cart, user preferences)
   - Prefer React state for local component state
4. **Data Fetching**:
   - Use Next.js server components for data fetching when possible
   - For client components, use standard fetch API with proper error handling
5. **Styling**:
   - Use TailwindCSS and utility classes for styling
   - Apply consistent spacing, typography, and color schemes
   - Use Tailwind's className merging with `cn` utility
6. **Validation**:
   - Implement validation on both client and server sides
   - Use appropriate error handling and user feedback

## Folder Structure

- `.github/`: GitHub specific files (workflows, PR templates, instructions)
- `app/`: Next.js app router pages and layouts
  - `(routes)/`: Groups of related pages (shop, account, etc.)
  - `admin/`: Admin-related routes (including Sanity Studio)
  - `api/`: API routes for serverless functions
- `components/`: Reusable React components
  - `ui/`: Basic UI components (buttons, inputs, etc.)
  - `new/`: Recently added components (to be reorganized later)
- `lib/`: Utility functions, hooks, and configurations
- `public/`: Static assets
- `sanity/`: Sanity.io schema definitions and configurations
- `store/`: Zustand store configurations
- `types/`: TypeScript type definitions

## Code Style Guidelines

1. **Component Structure**:
   - Use functional components with proper TypeScript typing
   - Place interfaces before component declarations
   - Document components and interfaces with JSDoc comments in Spanish
   - Include 'use client' directive for client-side components
2. **Naming Conventions**:
   - PascalCase for components and interface names
   - camelCase for variables, functions, and methods
   - kebab-case for file names
   - Use descriptive names that reflect purpose
3. **Formatting**:
   - Use 2 spaces for indentation
   - Use single quotes for strings
   - No trailing semicolons
   - Max line length of 80 characters when possible
   - Use explicit return types for functions
4. **Import Organization**:
   - Group imports by type (React, external libraries, internal)
   - Maintain alphabetical order within each group
   - Leave a blank line between import groups

## Naming Conventions

1. **Files & Directories**:
   - React components: `ComponentName.tsx`
   - Data files: `ComponentNameData.tsx`
   - Utility functions: `utility-name.ts`
   - Types/interfaces: `types.ts` or grouped by domain
2. **Component Props**:
   - Interface names: `ComponentNameProps`
   - Common props like `className` should follow conventions
3. **Functions**:
   - Event handlers: `handle[Event]`, e.g., `handleClick`, `handleSubmit`
   - Async functions: Prefix with verb describing action, e.g., `fetchData`, `createOrder`
4. **Variables**:
   - State: Descriptive of what it represents, e.g., `isLoading`, `cartItems`
   - Constants: Descriptive, all caps for truly constant values, e.g., `MAX_ITEMS`

## Documentation Guidelines

1. **JSDoc Comments**:

   - All documentation comments should be in Spanish
   - Document all components, hooks, and utilities with JSDoc
   - Include descriptions, parameters, return values, and examples
   - Use the following pattern for components:
     ```tsx
     /**
      * Componente `ComponentName`
      *
      * Descripción detallada del propósito y funcionalidad del componente.
      *
      * @param {ComponentNameProps} props - Propiedades del componente
      * @param {Type} props.propertyName - Descripción de la propiedad
      * @returns {JSX.Element} Descripción de lo que el componente renderiza
      *
      * @example
      * <ComponentName property="value" />
      */
     ```

2. **Interface Documentation**:

   - Document interfaces and types with JSDoc comments in Spanish
   - Describe each property with `@property` tags
   - Mark optional properties with square brackets
   - Example:
     ```tsx
     /**
      * Propiedades para el componente ComponentName.
      * @property {Type} propertyName - Descripción de la propiedad.
      * @property {AnotherType} [optionalProperty] - Descripción de la propiedad opcional.
      */
     ```

3. **Function Documentation**:
   - Document all functions and methods with JSDoc comments in Spanish
   - Include `@param` tags for all parameters
   - Specify return type with `@returns`
   - Document any side effects or important behaviors
   - Example:
     ```tsx
     /**
      * Maneja el evento de envío del formulario.
      *
      * Valida los datos del formulario y los envía al servidor si son válidos.
      * Muestra mensajes de error si la validación falla.
      *
      * @param {React.FormEvent} event - El evento de envío del formulario
      * @returns {Promise<void>} Una promesa que se resuelve cuando se completa el proceso
      */
     ```

## Important Note

- While the codebase and instructions are in English, all documentation, comments, and user-facing text should be maintained in Spanish.
- Always test your changes in development mode before committing.
- Make sure all components are properly typed with TypeScript.
- Follow the existing patterns in the codebase for consistency.
- When in doubt about a pattern or style, refer to the examples in the `components` directory.
