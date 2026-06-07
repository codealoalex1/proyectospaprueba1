import { useState } from "react"

export default function Carrito({carrito}) {
    const [contador, setContador] = useState(0);

    const sumarContador = () => {
        if(contador<10) setContador(prev => prev + 1);
    }

    const restarContador = () => {
        if(contador>0) setContador(prev => prev - 1)
    }

    console.log(carrito)
    
    return (
        <>
            <button type="button" onClick={restarContador}>-</button>
            <button>Contador: {contador}</button>
            <button type="button" onClick={sumarContador}>+</button>
        </>
    )
}