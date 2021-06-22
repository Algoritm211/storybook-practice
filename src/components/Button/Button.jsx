import React from 'react'
import './Button.css'

const Button = (props) => {
  const {variant = 'primary', disabled = false, children, ...rest} = props
  return (
    <button className={`button ${variant}`} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button