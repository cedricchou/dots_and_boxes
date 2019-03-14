import React from 'react'

const Input = (props) => {
  return (
    <input type="text" onChange={props.handleChange} >
        {props.input}
    </input>
  )
}

export default Input
