//npm module
import { Link } from "react-router-dom"

//icon
import resumeIcon from '../../assets/icon/resume-7.svg'

//css
import styles from './Resume.module.css'

const Resume = () => {
  return ( 
    <>
      <div className={styles.container}>
        <h1>Brendan's Resume</h1>
        <a href="resume-icon"><img id='resume' src={resumeIcon} alt="a cool resume icon" /></a>
      </div>
    </>
    
    
  )
}


export default Resume 