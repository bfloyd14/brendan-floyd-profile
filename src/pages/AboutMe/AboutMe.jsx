//css
import styles from './AboutMe.module.css'


const AboutMe = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.info}>
        <h1>About Me</h1>
        <p className={styles.p1}>Hi, I am Brendan Floyd, I have recently </p>
        <p className={styles.p2}>changed my career of 12 years of sales </p>
          <p className={styles.p3}>
          and management in the Beverage Alcohol 
          </p>
          <p className={styles.p4}>
          space to Software Engineering.
          </p>
        </div>
      </div>
    </>
      
  )
}

export default AboutMe