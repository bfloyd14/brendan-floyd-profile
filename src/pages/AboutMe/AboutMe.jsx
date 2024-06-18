//css
import styles from './AboutMe.module.css'


const AboutMe = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.info}>
        <h1>About Me</h1>
        <p>Hi, I am Brendan Floyd, I have recently </p>
        <p>changed my career of 12 years of sales </p>
          <p>
          and management in the Beverage Alcohol 
          </p>
          <p>
          space to Software Engineering.
          </p>
        </div>
      </div>
    </>
      
  )
}

export default AboutMe