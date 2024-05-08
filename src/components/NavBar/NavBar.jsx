//npm modules
import { NavLink } from "react-router-dom"

//css
import './NavBar.css'

const NavBar = () => {
  return ( 
    <>
    <nav>
        <div className="nav-link-container">
          <div className="name">
          <NavLink to='/'>BRENDAN FLOYD</NavLink>
          </div>
          <div className="nav-info-container">
          <NavLink to='/aboutme' >About me</NavLink>&nbsp;
          <NavLink to='/resume'>Resume</NavLink>&nbsp;
          <NavLink to='/myprojects'>My Projects</NavLink> &nbsp;
          <NavLink to='/contactme'>Contact Info</NavLink>&nbsp;
          </div>
        </div>
    </nav>
    </>

 )
}

export default NavBar