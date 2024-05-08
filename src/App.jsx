//npm modules
import { Route, Routes } from 'react-router-dom'


//pages
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/AboutMe/AboutMe'

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
        <Route path='/aboutme' element={<AboutMe/>} />
      </Routes>

    </>
  )
}

export default App
