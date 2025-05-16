/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'

import Link from 'next/link'

// import { MY_ORDERS_QUERYResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

import PriceFormatter from './PriceFormatter'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

/**
 * Propiedades para el componente OrderDetailsDialog.
 * @property {MY_ORDERS_QUERYResult[number] | null} order - Detalles del pedido a mostrar.
 * @property {boolean} isOpen - Determina si el diálogo está abierto o cerrado.
 * @property {() => void} onClose - Función para cerrar el diálogo.
 */
interface OrderDetailsDialogProps {
  // order: MY_ORDERS_QUERYResult[number] | null
  order: any
  isOpen: boolean
  onClose: () => void
}

/**
 * Componente `OrderDetailsDialog`
 *
 * Muestra un diálogo modal con los detalles completos de un pedido, incluyendo
 * información del cliente, estado del pedido, productos comprados, precios
 * y enlaces a la factura si está disponible.
 *
 * @param {OrderDetailsDialogProps} props - Propiedades del componente
 * @param {MY_ORDERS_QUERYResult[number] | null} props.order - Detalles del pedido a mostrar
 * @param {boolean} props.isOpen - Determina si el diálogo está abierto o cerrado
 * @param {() => void} props.onClose - Función para cerrar el diálogo
 * @returns {JSX.Element | null} Diálogo con detalles del pedido o null si no hay pedido
 *
 * @example
 * <OrderDetailsDialog
 *   order={selectedOrder}
 *   isOpen={dialogOpen}
 *   onClose={() => setDialogOpen(false)}
 * />
 */
const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-scroll bg-white">
        <DialogHeader>
          <DialogTitle>
            Detalles del Pedido -
            {order.orderNumber}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p>
            <strong>Cliente:</strong> 
            {' '}
            {order.customerName}
          </p>
          <p>
            <strong>Correo:</strong> 
            {' '}
            {order.email}
          </p>
          <p>
            <strong>Fecha:</strong>
            {' '}
            {order.orderDate && new Date(order.orderDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Estado:</strong>
            {' '}
            <span className="capitalize text-green-600 font-medium">
              {order.status}
            </span>
          </p>
          <p>
            <strong>Número de Factura:</strong> 
            {' '}
            {order?.invoice?.number}
          </p>
          {order?.invoice && (
            <Button className="bg-transparent border text-darkColor/80 mt-2 hover:text-darkColor hover:border-darkColor hover:bg-darkColor/10 hoverEffect ">
              {order?.invoice?.hosted_invoice_url && (
                <Link href={order?.invoice?.hosted_invoice_url} target="_blank">
                  Descargar Factura
                </Link>
              )}
            </Button>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Precio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.products?.map((product: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-2">
                  {product?.product?.images && (
                    <Image
                      src={urlFor(product?.product?.images[0]).url()}
                      alt="Imagen del producto"
                      width={50}
                      height={50}
                      className="border rounded-sm"
                    />
                  )}
                  {product?.product && product?.product?.name}
                </TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell>
                  <PriceFormatter
                    amount={product?.product?.price}
                    className="text-black font-medium"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right flex items-center justify-end">
          <div className="w-44 flex flex-col gap-1">
            {order?.amountDiscount !== 0 && (
              <div className="w-full flex items-center justify-between">
                <strong>Descuento: </strong>
                <PriceFormatter
                  amount={order?.amountDiscount}
                  className="text-black font-bold"
                />
              </div>
            )}
            {order?.amountDiscount !== 0 && (
              <div className="w-full flex items-center justify-between">
                <strong>Subtotal: </strong>
                <PriceFormatter
                  amount={
                    (order?.totalPrice as number) +
                    (order?.amountDiscount as number)
                  }
                  className="text-black font-bold"
                />
              </div>
            )}
            <div className="w-full flex items-center justify-between">
              <strong>Total: </strong>
              <PriceFormatter
                amount={order?.totalPrice}
                className="text-black font-bold"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OrderDetailsDialog
