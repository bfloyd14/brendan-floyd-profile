//npm modules
import { Link } from 'react-router-dom'

//css
import styles from './Landing.module.css'

//assets
import profile from '../../assets/images/profile-pic.jpg'
import linkedinIcon from '../../assets/icon/linkedin-icon.png'
import githubIcon from '../../assets/icon/github.png'
import gmailIcon from '../../assets/icon/gmail.png'

const Landing = () => {  
  
  return ( 
    <>
    <div className={styles.container}>
      <h1>
        Brendan Floyd
      </h1>
      <img src={profile} alt="" />
      <div className={styles.info}>
          <h1>Contact Info</h1>
          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/brendan-floyd-b8805143/" target="_blank"><img src={linkedinIcon} alt="" /></a>
            <a href="https://github.com/bfloyd14" target="_blank"><img src={githubIcon} alt="" /></a>
            <a href="mailto: brendanflo1425@gmail.com" target="_blank"><img src={gmailIcon} alt="brendanflo1425@gmail.com" /></a>
          </div>
        </div>
    </div>
    </>
  
  )
}

export default Landing