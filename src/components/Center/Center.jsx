import React from 'react'

const Center = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {props.children}
    </div>
  )
}

export default Center