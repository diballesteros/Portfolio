import React from "react"

import "./Button.css"

interface ButtonProps {
  click?: () => void
  text: string
}

const Button: React.FC<ButtonProps> = ({ click, text }) => {
  return (
    <button className="button" onClick={click} type="button">
      {text}
    </button>
  )
}

export default Button
