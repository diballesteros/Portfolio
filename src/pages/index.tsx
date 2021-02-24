import React from "react"
import Button from "../components/Button/Button"
import styles from "./index.module.scss"

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.title} ${styles.page}`}>
        <div className={styles.container}>
          <h1>
            Hi, my name is{" "}
            <span className={styles.main_color}>Diego Ballesteros</span>
          </h1>
          <h1>I&apos;m a Front End Developer</h1>
          <Button click={null} text="Know More" />
        </div>
      </div>
    </main>
  )
}

export default Home
