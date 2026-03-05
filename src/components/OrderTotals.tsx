import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {

    // reduce es un acumulador, empieza en 0, y va acumulando
    // lo que ya hay en el total más la cantidad de producto
    // por el precio, y solo se ejecuta este código
    // cada vez que cambia la order
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    // usamos use Memo porque solo queremos que este código se
    // ejecute unicamente cuando ciertas dependencias cambien:
    // Cuando cambie la propina(Pulse un boton u otro) o cuando
    // cambie la orden
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y Propina:</h2>
            <p>Subtotal a pagar: {' '}
                <span className='font-bold'>{formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propina: {' '}
                <span className='font-bold'>{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a Pagar: {' '}
                <span className='font-bold'>{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
