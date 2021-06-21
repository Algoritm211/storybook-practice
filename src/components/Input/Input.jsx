import React from 'react'
import './Input.css'


const Input = (props) => {
  const {size = 'small', ...args} = props
  return (
    <input className={`input ${size}`} {...args}/>
  )
}

export default Input