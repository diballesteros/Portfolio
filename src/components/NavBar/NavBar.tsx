import React from "react"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h1>Diego Ballesteros Castellanos</h1>
        <div className="nav__container__actions">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
          {/* <button>darkmode</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
