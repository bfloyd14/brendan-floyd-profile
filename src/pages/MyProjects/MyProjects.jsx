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
          <h3>Alacena</h3><br/> 
          <h5>React App</h5>
          <a href="https://alacena-jb.netlify.app/" target='blank'>
            <img src={alacena} alt="" />
            </a>
            <p><a href="https://github.com/juanrw7/alacena-front-end" target='blank'>Alacena GitHub</a></p>
            <h4>Contributors:</h4> 
            <p className={styles.name}>Brendan Floyd & <a href="https://github.com/juanrw7">Juan Ramirez</a></p>
        </div>
        <div className={styles.project}>
          <h3>Frugal</h3> <br/> 
          <h5>MEN Stack App</h5>
          <a href="https://frugal.fly.dev/" target='blank'>
            <img src={frugal} alt="" />
            </a>
            <p><a href="https://github.com/bfloyd14/frugal" target='blank'>Frugal GitHub</a></p>
        </div>
        <div className={styles.project}>
          <h3>PizzaPie</h3> <br/> 
          <h5>Python Djano App</h5>
          <a href="https://pizza-pie.fly.dev/" target='blank'>
            <img src={pizza} alt="" />
            </a>
            <p><a href="https://github.com/bfloyd14/pizza-pie" target='blank'>PizzaPie GitHub</a></p>
        </div>
        <div className={styles.project}>
          <h3>War Card Game</h3> <br/> 
          <h5>JavaScript</h5>
          <a href="https://warthecardgame-btf.netlify.app/" target='blank'>
            <img src={war} alt="" />
            </a>
            <p><a href="https://github.com/bfloyd14/war" target='blank'>War GitHub</a></p>
            <h4>Fun Fact</h4>
            <p>This is my first app I ever built</p>
        </div>
        <div className={styles.project}>
          <h3>Tic-Tac-Toe</h3> <br/> 
          <h5>JavaScript</h5>
          <a href="https://ttt-btf.netlify.app/" target='blank'>
            <img src={ttt} alt="" />
            </a>
            <p><a href="https://github.com/bfloyd14/ttt-drinking-edition" target='blank'>TicTacToe GitHub</a></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyProjects
