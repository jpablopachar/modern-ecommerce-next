'use client'

import { Loader2, Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/sanity/lib/image'

import { Product } from '@/sanity.types'

import useSearchBar from './useSearchBar'

import AddToCartButton from '../AddToCartButton'
import PriceView from '../PriceView'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'

/**
 * Componente `SearchBar`
 *
 * Proporciona una barra de búsqueda para productos que se muestra como un diálogo modal.
 * Permite a los usuarios buscar productos por nombre, mostrando resultados en tiempo real
 * a medida que el usuario escribe. Incluye gestión de estados de carga y resultados vacíos.
 *
 * @returns {JSX.Element} Barra de búsqueda modal con resultados de productos
 *
 * @example
 * <SearchBar />
 */
const SearchBar: React.FC = () => {
  const {
    search,
    setSearch,
    products,
    loading,
    showSearch,
    setShowSearch,
  } = useSearchBar()

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center hover:cursor-pointer"
      >
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden bg-white">
        <DialogHeader>
          <DialogTitle className="mb-3">Buscador de productos</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Busca tu producto aquí..."
              className="flex-1 rounded-md py-5 font-semibold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch('')}
                className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect"
              />
            )}
            <button
              type="submit"
              className="absolute right-0 top-0 bg-darkColor/10 w-10 h-full flex items-center justify-center rounded-tr-md hover:bg-darkColor hover:text-white hoverEffect"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-darkColor/20 rounded-md bg-white">
          <div className="">
            {loading ? (
              <p className="flex items-center px-6 gap-1 py-10 text-center text-green-600 font-semibold">
                <Loader2 className="w-5 h-5 animate-spin" />
                Buscando productos...
              </p>
            ) : products?.length ? (
              products.map((product: Product) => (
                <div
                  key={product?._id}
                  className="bg-white overflow-hidden border-b"
                >
                  <div className="flex items-center p-1">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      onClick={() => setShowSearch(false)}
                      className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border border-darkColor/20 rounded-md overflow-hidden group"
                    >
                      {product?.images && (
                        <Image
                          width={200}
                          height={200}
                          src={urlFor(product?.images[0]).url()}
                          alt={'imagenProducto'}
                          className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                        />
                      )}
                    </Link>
                    <div className="px-4 py-2 flex-grow">
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          onClick={() => setShowSearch(false)}
                        >
                          <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {product?.intro}
                          </p>
                        </Link>
                        <PriceView
                          price={product?.price as number}
                          discount={product?.discount}
                          className="md:text-lg"
                        />
                      </div>

                      <div className="w-60 mt-1">
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 font-semibold tracking-wide">
                {search && products?.length ? (
                  <p>
                    No hay coincidencias con la palabra
                    {' '}
                    <span className="underline text-red-600">{search}</span>
                    .
                    Por favor, intenta con otra búsqueda.
                  </p>
                ) : (
                  <p className="text-green-600 flex items-center justify-center gap-1">
                    <Search className="w-5 h-5" />
                    Busca y explora productos de Ecommerce.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
