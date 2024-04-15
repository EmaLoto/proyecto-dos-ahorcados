import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Celda } from './Celda.jsx'
import { Linea } from './Linea.jsx'
import { Dibujo } from './Dibujo.jsx'
import { abecedario, palabras, palabraIndex, palabraSeleccionada, reiniciar } from './Constantes-logica.js'

export function App () {
    const [letra, setLetra] = useState("!")
    const [letraAcertada, setLetraAcertada] = useState(false)
    const [intentoMal,setIntentoMal] = useState(-1)
    const [intentoBien,setIntentoBien] = useState(0)
    const [contaWin,setContaWin] = useState(0)

    useEffect(() => {
        let contador = 0
        abecedario.forEach((letrita) => {
            if ( palabraSeleccionada.includes(letrita)) 
            return contador ++
            else return contador            
        })
        setContaWin(contador)
    },[])

    useEffect(() =>{
        if(letraAcertada) return
        const newIntentoMal = intentoMal+1 
        setIntentoMal(newIntentoMal)
        console.log("letra errónea" ,newIntentoMal)
    }, [letra] )

    useEffect(() =>{
        if(!letraAcertada) return
        const newIntentoBien = intentoBien+1 
        setIntentoBien(newIntentoBien)
        console.log("letra acertada" ,newIntentoBien)
        console.log("CANTIDAD DE ACIERTOS NECESARIOS" , contaWin)
        if(contaWin == newIntentoBien)
            confetti({
                particleCount: 1000,
                spread: 1000
            })
    }, [letra] )

    return(
        <section className={intentoMal >= 5 || intentoBien == contaWin ? "ma-main desactivado" : "ma-main"}>
            <section className={intentoMal >= 5 || intentoBien == contaWin ? "overlay mostrar" : "overlay"}>
                <section className= {intentoMal >= 5 || intentoBien == contaWin ? "end-bloque mostrar" : "end-bloque"}>
                    <h1>
                        {intentoBien == contaWin ? "GANASTE": ""}
                        {intentoMal >= 5 ? "PERDISTE" : ""}                        
                    </h1>
                    <button onClick={reiniciar}>VOLVER A JUGAR</button>
                </section>
            </section>       
            <section className='ma-bloque-superior'>
                <section className="ma-bloque">
                    <h1>
                        {palabras[palabraIndex].frase}
                    </h1>                        
                </section>
                <section className="ma-bloque">
                    <Dibujo intentoMal={intentoMal} />
                </section>
            </section>
            <section className='ma-bloque-inferior'>
                <section className="ma-bloque">    
                    {
                       palabras[palabraIndex].palabra.split("").map((_,index) => {
                        return(
                            <Linea 
                                key={index}
                                letra = {letra}
                                letraAcertada = {letraAcertada}
                                setLetraAcertada = {setLetraAcertada}                                
                            >
                                {palabras[palabraIndex].palabra[index]}
                            </Linea>
                        )
                       })                              
                    }                 
                </section>
                <section className="ma-bloque-celdas">
                    {
                        abecedario.map((_,indexAbc) => {
                            return(
                                <Celda 
                                    key={indexAbc}
                                    palabraSeleccionada={palabraSeleccionada} 
                                    setLetra={setLetra}
                                    setLetraAcertada={setLetraAcertada}                                                                                                                                                           
                                >
                                {abecedario[indexAbc]}
                                </Celda>                        
                            )
                        })
                    }
                </section>        
            </section>
        </section>
    )
}