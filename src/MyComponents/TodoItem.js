import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div className="">
      <h4 className='my-4'>{todo.title}</h4>
      <h6>{todo.desc}</h6>
      <button className="btn btn-sm btn-danger text-centre" onClick={()=>{onDelete(todo)}}>Delete</button>
       <hr/>      
    </div>
    
    
  )
}
