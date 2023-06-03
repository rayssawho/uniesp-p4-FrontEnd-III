import { useState } from "react"

const HookMegaSena = () => {

    const [numeroMega, setNumeroMega] = useState()
    const [numerosSorteados, setnumerosSorteados] = useState([])

    function sortearNumero() {
        if (numerosSorteados.length < 6) {
            let sorteado = Math.floor(Math.random() * 60) + 1
            setNumeroMega(sorteado)
            setnumerosSorteados([...numerosSorteados, sorteado])
        } else {
            alert("Já temos 6 números sorteados!")
        }
       
    }


  return (
    <div>
        <h1>Sorteador de Números da Mega em React!</h1>
        <button onClick={sortearNumero}>Sortear número</button>
        <h1>Último número sorteado: {numeroMega} </h1>
        <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena