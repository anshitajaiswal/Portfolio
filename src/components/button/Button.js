import * as React from "react"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as, arrow }) => {
  return (
    <ButtonStyles className="btn" as={as} to={to}>
      Send message
    </ButtonStyles>
  )
}

export default Button