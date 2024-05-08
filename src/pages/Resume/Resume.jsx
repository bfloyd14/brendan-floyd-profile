//npm module
import { Link } from "react-router-dom"

//icon
import resumeIcon from '../../assets/icon/resume-7.svg'

//css
import './Resume.css'

const Resume = () => {
  return ( 
    <main>
      <div className="resume-container">
      <h1>Brendan's Resume</h1>
      <Link><img src={resumeIcon} alt="a cool resume icon" /></Link>
      </div>
    </main>
    
  )
}


export default Resume 