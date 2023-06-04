import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/pokemons"

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            setPokemons(data)
        }

        fetchData()
    }, []
    )

  return (
    <div className='pokemonsCss'>
        <h1>Pokémons</h1>
        <h3>Clique no pokémon e saiba mais</h3>
        <div className='pokemonCss2'>
               
        {
            pokemons.map((pokemon) =>
            <div key={pokemon.id}>
                <h2><Link to={`/visualiza-pokemon/${pokemon.id}`}>{pokemon.name} <img class='imgPokemini' src={pokemon.img}/></Link></h2>
            </div>
            )
        }
        </div>
        
    </div>
  )
}

export default Pokemons