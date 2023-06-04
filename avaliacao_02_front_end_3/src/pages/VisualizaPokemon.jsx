import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VisualizaPokemon = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/pokemons/${id}`

    const [visualizaPokemon, setVisualizaPokemon] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            setVisualizaPokemon(data)
        }
        fetchData()
    }, []
    )

  return (
    <div className='cadaPokemon'>
        <h2>Pokémon: {visualizaPokemon.name}</h2>
        <img src= {visualizaPokemon.img} />
        <p>{visualizaPokemon.description}</p>
        <h3>Evolução: {visualizaPokemon.evolution}</h3>
    </div>
  )
}

export default VisualizaPokemon