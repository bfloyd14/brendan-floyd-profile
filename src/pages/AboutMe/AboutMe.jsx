//css
import styles from './AboutMe.module.css'


const AboutMe = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.info}>
        <h1>About Me</h1>
        <p>I am Brendan, a fullstack software engineer, former sales specialist with 12+ years of sales and managment experience.</p>
        </div>
      </div>
    </>
      
  )
}

export default AboutMe