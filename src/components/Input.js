import React from 'react'

const Input = (props) => {
  return (
    <input type="text" name={props.name} onChange={props.handleChange} >
        {props.input}
    </input>
  )
}

export default Input
