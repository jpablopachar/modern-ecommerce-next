'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'
import { KeyboardEvent, useState } from 'react'

import { cn } from '@/lib/utils'

import { Category } from '@/sanity.types'

import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'

import { Popover, PopoverContent, PopoverTrigger } from './popover'

interface CategorySelectorProps {
  categories: Category[]
}

/**
 * Componente `CategorySelector`.
 *
 * Este componente permite al usuario seleccionar una categoría de una lista desplegable
 * o buscar una categoría escribiendo su nombre. Al seleccionar o buscar una categoría,
 * el usuario es redirigido a la página correspondiente de la categoría seleccionada.
 *
 * Características:
 * - Muestra un botón que despliega una lista de categorías disponibles.
 * - Permite buscar categorías por nombre mediante un campo de entrada.
 * - Navega automáticamente a la página de la categoría seleccionada.
 * - Indica visualmente la categoría seleccionada.
 *
 * @component
 * @param {CategorySelectorProps} props - Propiedades del componente.
 * @param {Category[]} props.categories - Lista de categorías disponibles para seleccionar.
 */
const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

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
    if (event.key === 'Enter') {
      const selectedCategory = categories.find((c) =>
        c.title
          ?.toLowerCase()
          .includes(event.currentTarget.value.toLowerCase()),
      )

      if (selectedCategory?.slug?.current) {
        setValue(selectedCategory?._id)
        setOpen(false)

        router.push(`/categories/${selectedCategory.slug.current}`)
      }
    }
  }

  /**
   * Maneja la selección de una categoría por parte del usuario.
   *
   * Esta función actualiza el valor seleccionado, cierra el selector
   * y navega a la página correspondiente a la categoría seleccionada.
   *
   * @param category - La categoría seleccionada por el usuario.
   */
  const handleSelect = (category: Category): void => {
    setValue(category._id)
    setOpen(false)

    router.push(`/categories/${category.slug?.current}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category?._id === value)?.title
            : 'Filtrar por Categoría'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Buscar categoría..."
            className="h-9"
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            <CommandEmpty>No se ha encontrado el framework.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category?._id}
                  value={category?.title}
                  onSelect={() => handleSelect(category)}
                >
                  {category?.title}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === category._id ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default CategorySelector
