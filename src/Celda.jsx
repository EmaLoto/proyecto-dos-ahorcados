import { useState } from "react"

export function Celda ({children, palabraSeleccionada, setLetra, setLetraAcertada}) {

    const [wasPressed, setWasPressed] = useState(false)  

    const claseTecla = wasPressed ? "cel-bloque desactivado" : "cel-bloque"

    const updateTecla = () => {
        const nuevoEstadoTecla = true
        setWasPressed(nuevoEstadoTecla)
        const bandera = palabraSeleccionada.includes(children) ? true : false
        console.log(bandera)
        setLetraAcertada(bandera)
        setLetra(children)
    }

    return(
        <section className={claseTecla} onClick={updateTecla}>
            {children}
        </section>
    )
}