//npm modules
import { NavLink } from "react-router-dom"

//assets
import aboutIcon from '../../assets/icon/about-me-icon.png'
import resumeIcon from '../../assets/icon/resume-dark.png'
import projectIcon from '../../assets/icon/rocket1.png'

//css
import styles from './NavBar.module.css'

const NavBar = () => {
  return ( 
    <>
    <nav>
        <div className={styles.navBar}>
          <ul>
            <NavLink  to='/'>
            <div className={styles.name}>
            BF
            </div>
            </NavLink>
            <li>
              <NavLink to='/aboutme'><img src={aboutIcon} alt="" /></NavLink>&nbsp;
            </li>
            <li>
            <NavLink to='/resume'><img src={resumeIcon} alt="" /></NavLink>&nbsp;
            </li>
            <li>
            <NavLink to='/myprojects'><img src={projectIcon} alt="" /></NavLink> &nbsp;
            </li>  
          </ul>
      </div>
    </nav>
    </>

  )
}

export default NavBar