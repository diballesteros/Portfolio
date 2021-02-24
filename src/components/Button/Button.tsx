import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.scss"

interface ButtonProps {
  click: () => void
  text: string
}

const Button: React.FC<ButtonProps> = ({ click, text }) => {
  return (
    <button className={styles.button} onClick={click} type="button">
      {text}
    </button>
  )
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
