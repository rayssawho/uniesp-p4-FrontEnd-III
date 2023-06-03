import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Faculdade from './pages/Faculdade'
import Home from './pages/Home'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'

function App() {
 
  return (
    <>
      
      <BrowserRouter>
        <img src="https://www.iesp.edu.br/images/logo-iesp.jpg" />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-faculdade' element={<Faculdade />} />
          <Route path='/dpo-lgpd' element={<DpoLgpd />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
