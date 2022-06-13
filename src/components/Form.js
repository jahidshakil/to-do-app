import React from 'react'
import { v4 as uuidv4 } from "uuid"

const Form = () => {
  

  const onInputchange = () => {

  }

  const onFormSubmit = () => {


  }
  const handleClick = (event) => {
    event.preventDeafault();
  }

  return (
      <form >
      <input
        type="text"
        placeholder='Enter a todo...'
        className='task-input'
        onChange={onInputchange}

      />
          <button className='button-Add' >Add todo</button>
    </form>
  )
}

export default Form