import React from "react"
import picture from "../../assets/img/Profile.jpg"
import "./AboutMe.scss"

const AboutMe: React.FC = () => {
  return (
    <div className="aboutme">
      <div className="aboutme__profile">
        <img src={picture} alt="profile" />
        <span className="aboutme__profile__name">
          Diego Ballesteros Castellanos
        </span>
        <span className="aboutme__profile__job">Front End Web Developer</span>
        <div>socials</div>
      </div>
      <div className="aboutme__biography">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          sapien pharetra, iaculis dolor sit amet, faucibus est. Aliquam eu
          libero ornare sem aliquet faucibus eu eu mauris. Morbi semper volutpat
          cursus. Nullam rhoncus lorem eu elit aliquet egestas. Vestibulum
          ligula orci, semper ac enim ac, vulputate scelerisque lorem. Proin
          pharetra, ante ut facilisis fermentum, sapien massa imperdiet velit,
          vitae posuere magna tellus quis neque. Aliquam fermentum quam a
          venenatis feugiat. Sed at orci convallis, sodales orci nec, interdum
          elit. Mauris pharetra varius sollicitudin. Phasellus vestibulum massa
          in risus tincidunt, non volutpat enim lobortis. Aliquam erat volutpat.
          Sed aliquam arcu leo, vitae sodales mauris pulvinar et. Nunc tempus
          euismod tellus at condimentum. Maecenas malesuada vel lacus non
          rhoncus. Ut quis maximus purus. Donec quis quam ac est pulvinar porta
          eu id tortor. Donec tellus orci, malesuada in dignissim maximus,
          placerat in urna. Quisque consequat felis sed neque blandit, quis
          fermentum nunc porttitor. Nam id mollis eros. Quisque tempus enim
          dolor, a molestie tellus tincidunt at. Sed nec vehicula orci. Cras
          viverra, ante non semper porta, lacus justo molestie ligula, eu
          ullamcorper nibh metus in tellus.
        </p>
        <h3>Education</h3>
        <ul>
          <li>Politecnico</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
