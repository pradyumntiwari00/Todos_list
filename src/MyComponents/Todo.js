import React from 'react'
export default function Todo({todo,onDelete}) {
  return (
    <div className="text-center">
     <h4>{todo.title}</h4> 
     <button type="checkbox" className="btn btn-outline-danger" onClick={()=>onDelete(todo)}>Done</button>
    </div>
  )
}
