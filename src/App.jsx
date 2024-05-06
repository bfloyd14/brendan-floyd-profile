//npm modules
import { Route, Routes } from 'react-router-dom'


//pages
import Landing from './pages/Landing/Landing'

//components
import NavBar from './components/NavBar/NavBar'

//css
import './App.css'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>

    </>
  )
}

export default App
