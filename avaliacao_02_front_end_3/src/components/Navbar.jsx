import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='barraNav'>
        <Link to="/">Página Inicial</Link> 
        <Link to="/pokemons">Pokémons</Link> 
        <Link to="/quiz">Teste seus conhecimentos</Link> 
        <Link to="/creditos">Créditos</Link>
    </nav>
  )
}

export default Navbar