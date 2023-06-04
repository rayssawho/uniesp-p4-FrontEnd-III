import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Pokemons from "./pages/Pokemons"
import Home from "./pages/Home"
import Creditos from "./pages/Creditos"
import VisualizaPokemon from "./pages/VisualizaPokemon"
import Quiz from "./pages/Quiz"

function App() {
  
  return (
    <>
      <div className="topo">
        <img class = 'imgTopo' src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"/>
      </div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/creditos' element={<Creditos />} />
          <Route path='/visualiza-pokemon/:id' element={<VisualizaPokemon />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <div className="rodape">
        <p>O melhor site sobre Pokémon do Brasil!</p>
      </div>
    </>
  )
}

export default App
