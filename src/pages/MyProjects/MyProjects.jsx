//assets
import alacena from '../../assets/images/alacena1.png' 
import frugal from '../../assets/images/frugal-signin-SS.png' 

//css
import styles from './MyProjects.module.css'

const MyProjects = () => {
  return ( 
    <>
    <div className={styles.title}>
      <h1>Projects</h1>
    </div>
      <div className={styles.container}>
        <div className={styles.project}>
          <h3>Alacena - Recipe Search App</h3>
          <a href="https://alacena-jb.netlify.app/" target='blank'>
            <img src={alacena} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, React, Mongoose, Node, Express, Edamam API, Passport.js, MongoDB, HTML, CSS, Auth Token</p>
            <p><a href="https://github.com/juanrw7/alacena-front-end" target='blank'>Alacena GitHub</a></p>
            <h4>Contributors:</h4> 
            <p className={styles.name}>Brendan Floyd and <a href="https://github.com/juanrw7">Juan Ramirez</a></p>
        </div>
        <div className={styles.project}>
          <h3>Frugal - Personal Budgeting App</h3>
          <a href="https://frugal.fly.dev/" target='blank'>
            <img src={frugal} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, Mongoose, Nodejs, Express, Node, MongoDB, Passport.js, Google OAuth, HTML, CSS</p>
            <p><a href="https://github.com/bfloyd14/frugal" target='blank'>Frugal GitHub</a></p>
        </div>
      </div>
    </>
  )
}

export default MyProjects
