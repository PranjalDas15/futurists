import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='text-text-primary text-roboto'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
