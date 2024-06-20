//css
import styles from './AboutMe.module.css'


const AboutMe = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div className={styles.info}>
        <h1>About Me</h1>
          <p className={styles.p1}>
            Hi, I am Brendan Floyd, I have recently 
          </p>
          <p className={styles.p2}>
            changed my career of 12 years of sales 
          </p>
          <p className={styles.p3}>
          and management in the Beverage Alcohol 
          </p>
          <p className={styles.p4}>
          industry to Software Engineering.
          </p>
          <p className={styles.p5}>
            I am a former Division 1 Athlete that
          </p>
          <p className={styles.p6}>
            is passionate about winning, teamwork
          </p>
          <p className={styles.p7}>
            and problem solving.  I am a father of a
          </p>
          <p className={styles.p8}>
            8-month little girl, so she keeps me occupied.
          </p>
          <p className={styles.p9}>
            I enjoy spending time with my wife, cooking, 
          </p>
          <p className={styles.p10}>
          hiking with our dogs and a great beer.
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h1>Technologies</h1>
          </div>
          <div className={styles.technology}>
          <a href='#'><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/></a> &nbsp;&nbsp;&nbsp;
          <a href='#'><img src='https://img.shields.io/badge/-MongoDB-white?style=flat-square&logo=mongodb'/></a> &nbsp;&nbsp;&nbsp;
          <a href='#'><img src='https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django'/></a>&nbsp;&nbsp;&nbsp;
          <a href='#'><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"/></a>&nbsp;&nbsp;&nbsp;
          <a href='#'><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/></a>&nbsp;&nbsp;&nbsp;
          <a href='#'><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black"/></a>&nbsp;&nbsp;&nbsp;
          <a href='#'><img src="https://img.shields.io/badge/-NodeJS-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>&nbsp;&nbsp;&nbsp;
          <a href='#'><img src='https://img.shields.io/badge/-Express.js-404D59?style=flat-square&for-the-badge'/></a>
          </div>
        </div>
      </div>
    </>
      
  )
}

export default AboutMe