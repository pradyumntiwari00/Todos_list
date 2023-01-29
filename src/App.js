import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import Addtodo from './MyComponents/Addtodo';
import React, { useState,useEffect } from 'react';
import About from './MyComponents/About'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
function App() {
    let initTodo;
    if(localStorage.getItem('todos')===null){
        initTodo=[];
    }
    else{
        initTodo=JSON.parse(localStorage.getItem('todos'));
    }
    const onDelete=(todo)=>{
        setTodos(todos.filter((e)=>{
           return e!==todo;
        }
        ));
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    const addTodo=(title)=>{
        console.log("added");
        let lengthh=todos.length;
        let sNo=lengthh!==0? todos[todos.length-1].sNo+1
        :1;
        const myTodo={
            sNo:sNo,
            title:title,
        }
        setTodos([...todos,myTodo]);  
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])
  return (
   <>
   <Router>
   <div className="main-page"> 
   <Header title='Todos List'/>
   <Addtodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
    <Routes>
    <Route exact path="/about" element={<About/>}>
    </Route>
    </Routes>
   </div>
   <Footer/>
   </Router> 
   </>
);
}
export default App;
