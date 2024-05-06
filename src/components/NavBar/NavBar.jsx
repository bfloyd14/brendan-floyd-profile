//npm modules
import { NavLink, Link } from "react-router-dom"

//css
import './NavBar.css'

const NavBar = () => {
  return ( 
    <>
    <header>
      <NavLink>
        BRENDAN FLOYD
        About me
        Resume
        Projects
        Contact Info
      </NavLink>
    </header>
    </>

 )
}

export default NavBar