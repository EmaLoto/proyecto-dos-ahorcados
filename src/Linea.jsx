import { useState , useEffect} from "react"

export function Linea ({children, letra, letraAcertada, setLetraAcertada}) {

    const [acierto, setAcierto]  = useState(false)
    const claseLetra = letraAcertada && letra == children ? true : false
    const nuevaClase = acierto ?  "ln acierto" : "ln"

    useEffect(() => {
        if(!claseLetra) return
        setAcierto(true)
        setLetraAcertada(false)
    }, [claseLetra] )
    
    return(
        <section className={nuevaClase}>
            {acierto && children}
        </section>
    )
}