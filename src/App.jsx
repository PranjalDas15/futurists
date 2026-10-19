import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <div className='text-text-primary text-anton'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
