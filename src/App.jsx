import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

function App() {

  return (
    <div className='text-text-primary text-roboto'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
