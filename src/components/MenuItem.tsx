import type { MenuItem } from "../types";

type MenuItemProps = {
    item : MenuItem,

    /**incluimos la funcion que pasamos por prop para poder usarla en
     * App.tsx
     */
    addItem: (item: MenuItem) => void
}


//Componente de Item
export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button 
      className="border-2 border-teal-400 hover:bg-teal-200 p-3 rounded-lg flex 
      justify-between  w-full"
      onClick={() => addItem(item)} // Lo ponemos como call back porque hay que pasarle lo que le queremos agregar.
    >
        <p>{item.name}</p>
        <p className="font-black">€{item.price}</p>
    </button>
  )
}
