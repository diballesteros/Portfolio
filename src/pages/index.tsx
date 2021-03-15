import React from "react"
import NavBar from "../components/NavBar/NavBar"
import AboutMe from "./AboutMe/AboutMe"
import "./index.scss"

const Home: React.FC = () => {
  return (
    <main className="main">
      <NavBar />
      <div className="body">
        <AboutMe />
      </div>
    </main>
  )
}

export default Home
