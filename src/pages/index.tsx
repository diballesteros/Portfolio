import React from "react"
import Button from "../components/Button/Button"
import "./index.css"

const Home: React.FC = () => {
  return (
    <main className="main">
      <section className="title page">
        <div className="container">
          <h1>
            Hi, my name is <span className="main_color">Diego Ballesteros</span>
          </h1>
          <h1>I&apos;m a Front End Developer</h1>
          <Button click={null} text="Know More" />
        </div>
      </section>
      <section className="aboutme">
        <h2>ABOUT ME</h2>
        <div className="container">
          <div>picture</div>
          <p>test</p>
        </div>
      </section>
    </main>
  )
}

export default Home
