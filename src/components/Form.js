import React from 'react'

const Form = () => {
  return (
      <form>
          <input type="text" placeholder='Enter a todo...' className='task-input' />
          <button className='button-Add'>Add todo</button>
    </form>
  )
}

export default Form