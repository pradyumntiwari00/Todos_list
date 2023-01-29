import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    
  return (
    <div className='content'>
        <h3 className='top-text text-center'>Todos List</h3>
        {props.todos.length===0? <div className='no-work text-center'>No pending work</div>:
        props.todos.map((todo)=>{
          return <Todo todo={todo} key={todo.sNo} onDelete={props.onDelete}/>  
        })
        }
    </div>
  )
}
