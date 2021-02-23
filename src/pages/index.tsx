import React from "react"
import styles from "./index.module.scss"

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.title} ${styles.page}`}>
        <h1>
          Hi, my name is <span>Diego Ballesteros</span>
        </h1>
        <h1>I&apos;m a Front End Developer</h1>
        <button type="button">Know more</button>
      </div>
    </main>
  )
}

export default Home
