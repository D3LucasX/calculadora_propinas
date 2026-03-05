import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    /**Usamos el Generic para que cada vez que añadamos un elemento 
     * al array, se compruebe que es de tipo OrderItem, es decir, que 
     * tiene los atributos de MenuItem heredados y el que tiene OrderItem
     * generic  -->  <OrderItem[]>
     */
    const [order, setOrder] = useState<OrderItem[]>([])
    // useState para definir el valor inicial hasta que el usuario elija cuanto quiere dar de propina de la propina y para setear la funcion que modifica el estado
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) // Comprueba si esta el pedido en la orden
        if (itemExist) {
            // Arreglo nuevo para setearlo en el original
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? // Comprueba si esta, si no e
                {...orderItem, quantity: orderItem.quantity +1} : // Recorre la lista para crear una nueva, y el que coincida, incrementar la cantidad.
                orderItem                                         // Lo pone entre llaves porque lo que añades son objetos          
            )
            setOrder(updatedOrder)
        } else {
            const newItem = { ...item, quantity: 1}
            setOrder([...order, newItem])
            // const newItem: OrderItem = {...item, quantity:1}
            // No lo pongo porque ya con el generic de arriba estamos diciendo
            // que lo que le va a entrar son OrderItem, pero si lo ponemos
            // no pasa nada

        }
    }
    const removeItem = (itemId: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== itemId))
    }

    const placeOrder = () =>{
        // cuando guardemos la comanda, reinicimaos la Order 
        // y la propina
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}