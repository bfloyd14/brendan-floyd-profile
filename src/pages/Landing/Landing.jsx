//npm modules
import { Link } from 'react-router-dom'

//css
import styles from './Landing.module.css'

//assets
import profile from '../../assets/images/profile-pic.jpg'
import linkedinIcon from '../../assets/icon/linkedin-icon.png'
import githubIcon from '../../assets/icon/github.png'
import gmailIcon from '../../assets/icon/gmail.png'
import slackIcon from '../../assets/icon/slack.png'

const Landing = () => {  
  
  return ( 
    <>
    <div className={styles.container}>
      <div className={styles.name}>
      <h1>
        Brendan Floyd
      </h1>
      <h2>
        A Software Engineer specializing in building relationships.</h2>
      </div>
      <img src={profile} alt="" />
      <div className={styles.info}>
          <h2>Contact Info</h2>
          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/brendan-floyd-b8805143/" target="_blank"><img src={linkedinIcon} alt="" /></a>
            <a href="https://github.com/bfloyd14" target="_blank"><img src={githubIcon} alt="" /></a>
            <a href="mailto: brendanflo1425@gmail.com" target="_blank"><img src={gmailIcon} alt="brendanflo1425@gmail.com" /></a>
            <a href="https://brendanfloyd.slack.com" target="_blank"><img src={slackIcon} alt="Brendan Floyd's Slack username" /></a>
          </div>
        </div>
    </div>
    </>
  
  )
}

export default Landing