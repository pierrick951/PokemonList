import { useEffect, useState } from "react"
import PokeCard from "./Components/PokeCard/PokeCard"
import './App.css'

export default function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        data.sort((a, b) => {
          if (a.apiGeneration < b.apiGeneration) {
            return -1
          }
          else if (a.apiGeneration > b.apiGeneration) {
            return 1
          }
          return 0
        })
        setPokemon(data)
      })

  }, [])
  return (
    <div className="MainContainer">
      <div className="secondContainer">
        <h1>Pokemon Liste</h1>
        <div className="Flecontainer">
          {pokemon && (
            <ul className="listePokemon">
              {pokemon.map((poke) => (
                <PokeCard  key={poke.id} poke={poke} />
              )
              )}
            </ul>
          )}

        </div>
      </div>

    </div>
  )
}