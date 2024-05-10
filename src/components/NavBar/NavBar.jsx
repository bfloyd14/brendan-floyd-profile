//npm modules
import { NavLink } from "react-router-dom"

//assets
import aboutIcon from '../../assets/icon/about-me-icon.png'
import resumeIcon from '../../assets/icon/dark-resume-1.jpg'
import projectIcon from '../../assets/icon/project-icon.jpg'
import contactIcon from '../../assets/icon/contact-icon.png'

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
            <ul>
          <li>
            <NavLink to='/aboutme'><img src={aboutIcon} alt="" /></NavLink>&nbsp;
          </li>
          <li>
          <NavLink to='/resume'><img src={resumeIcon} alt="" /></NavLink>&nbsp;
          </li>
          <li>
          <NavLink to='/myprojects'><img src={projectIcon} alt="" /></NavLink> &nbsp;
          </li>  
          <li>
          <NavLink to='/contactme'><img src={contactIcon} alt="" /></NavLink>&nbsp;  
          </li>  
              
            </ul>
          </div>
        </div>
    </nav>
    </>

  )
}

export default NavBar