//assets
import alacena from '../../assets/images/alacena1.png' 
import frugal from '../../assets/images/frugal.png' 
import pizza from '../../assets/images/pizzapie-ss.png'
import war from '../../assets/images/war-ss.png'
import ttt from '../../assets/images/ttt-ss.png'

//css
import styles from './MyProjects.module.css'

const MyProjects = () => {
  return ( 
    <>
    <div className={styles.pageContainer}>
    <div className={styles.title}>
      <h1>Projects</h1>
    </div>
      <div className={styles.container}>
        <div className={styles.project}>
          <h3>Alacena - Recipe Search App</h3>
            <p><a href="https://github.com/juanrw7/alacena-front-end" target='blank'>Alacena GitHub</a></p>
          <a href="https://alacena-jb.netlify.app/" target='blank'>
            <img src={alacena} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, React, Mongoose, Node, Express, Edamam API, Passport.js, MongoDB, HTML, CSS, Auth Token</p>
            <h4>Contributors:</h4> 
            <p className={styles.name}>Brendan Floyd and <a href="https://github.com/juanrw7">Juan Ramirez</a></p>
        </div>
        <div className={styles.project}>
          <h3>Frugal - Personal Budgeting App</h3>
            <p><a href="https://github.com/bfloyd14/frugal" target='blank'>Frugal GitHub</a></p>
          <a href="https://frugal.fly.dev/" target='blank'>
            <img src={frugal} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, Mongoose, Nodejs, Express, Node, MongoDB, Passport.js, Google OAuth, HTML, CSS</p>
        </div>
        <div className={styles.project}>
          <h3>PizzaPie - Pizza Blog</h3>
            <p><a href="https://github.com/bfloyd14/pizza-pie" target='blank'>PizzaPie GitHub</a></p>
          <a href="https://pizza-pie.fly.dev/" target='blank'>
            <img src={pizza} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>Python3, Django, HTML, CSS</p>
        </div>
        <div className={styles.project}>
          <h3>War Card Game </h3>
            <p><a href="https://github.com/bfloyd14/war" target='blank'>War GitHub</a></p>
          <a href="https://warthecardgame-btf.netlify.app/" target='blank'>
            <img src={war} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, HTML, CSS</p>
            <h4>Fun Fact</h4>
            <p>This is my first app I ever built</p>
        </div>
        <div className={styles.project}>
          <h3>Tic-Tac-Toe</h3>
            <p><a href="https://github.com/bfloyd14/ttt-drinking-edition" target='blank'>TicTacToe GitHub</a></p>
          <a href="https://ttt-btf.netlify.app/" target='blank'>
            <img src={ttt} alt="" />
            </a>
            <h4>Technologies</h4>
            <p>JavaScript, HTML, CSS</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProjects
