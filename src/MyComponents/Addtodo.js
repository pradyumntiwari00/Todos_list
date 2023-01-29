import React, { useState } from 'react';
const Addtodo = (props) => {
  const [title,setTitle]=useState("add a task");
  function reset()
  {
    setTitle("")
  }
  
  const submit=(e)=>{
    e.preventDefault();
    if(!title){
      alert("Todo can't be empty");
    }
    else{
   props.addTodo(title); 
   setTitle("");
    }
  }
  return (
    <div className='my-3 text-center container'>
      <h3>Add Tasks</h3>
      <form onSubmit={submit} >
        <label htmlFor="title" className='form-label my-3'></label>
    <input onClick={reset} type="text" className="form-control input" id="exampleInputEmail1" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
  </div>
  )
}

export default Addtodo
