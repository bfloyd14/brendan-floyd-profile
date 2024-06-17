
//assets
import resumeIcon from '../../assets/icon/resume-7.svg'
import resume from '../../assets/images/brendan-resume.pdf'

//css
import styles from './Resume.module.css'

const Resume = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.info}>
        <h1>My Resume</h1>
        <a href={resume} target="blank"><img id='resume' src={resumeIcon} alt="a cool resume icon" /></a>
        </div>
      </div>
    </>
  )
}


export default Resume 