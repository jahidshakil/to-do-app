import React from 'react'

const TodosList = ({todos,setTodos}) => {
  return (
      <div> sdfhhduds
          {todos.map((todo) => (
              <li className='todo-list' key={todo.id}>

              </li>
          )
          )}
    </div>
  )
}

export default TodosList