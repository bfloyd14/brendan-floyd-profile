//npm modules
import { Link } from 'react-router-dom'

//icon
import linkedinIcon from '../../assets/icon/linkedin-icon.png'
import githubIcon from '../../assets/icon/github.png'


// css
import './ContactMe.css'

const ContactMe  = () => {
  return ( 
    <main>
      <div className="contact-container">
        <h1>Contact Info</h1>
        <a href="https://www.linkedin.com/in/brendan-floyd-b8805143/" target="_blank"><img src={linkedinIcon} alt="" /></a>
        <a href="https://github.com/bfloyd14" target="_blank"><img src={githubIcon} alt="" /></a>
      </div>
    </main>
  )
}

export default ContactMe 