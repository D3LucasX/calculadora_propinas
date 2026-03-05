const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    // Esto, cuando estamos definiendo los props, nos camos a la funcion de set tip, por ejemplo em App.tsx, y nos posamos encima de la function, y copiamos lo que nos sale, asi definimos de que tipo es y que hace
    // dispara el setState que es de tipo number
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number

}

export default function TipPercentageForm({setTip, tip}:TipPercentageFormProps ){
    return (
        <div className="flex gap-2">
            <h3 className="font-black text-2xl">Propina:</h3>
            <form >
                { /**Iteramos sobre los tips */}
                {tipOptions.map(tipOptions => (
                    /**Añadimos una key para identificar cada elemento */
                    <div key={tipOptions.id} >
                        {/* Indicamos el label para cada boton */}
                        <label htmlFor="">{tipOptions.label}</label>
                        <input
                            id={tipOptions.id}
                            type="radio"
                            name="tip"
                            value={tipOptions.value} /**Con esto impedimos seleccionar mas de uno */

                            // Ponemos el '+' porque setTip arriba definimos que dispara el setState que es de tipo number, y si no le ponemos el '+' delante, sería un string, asi que con el +, lo transformamos a number.
                            // Si el valor lo cogieramos de un input de tipo text, podríamos poner valueAsNumber en vez de value, en este caso como es de tipo radio, no funciona.
                            onChange={e => setTip(+e.target.value)}

                            // Con checked lo que le decimos es que 
                            // si el valor del tip es 0, que no salga
                            // marcada ninguna opcion despues de 
                            // por esjemplo guardar una comanda o
                            // refrescar
                            checked={tipOptions.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
