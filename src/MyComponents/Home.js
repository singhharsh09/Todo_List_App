import React from 'react'



import {useState} from 'react';
import Header from "./header";
import {Todos} from "./Todos";
import {TodoItem} from "./TodoItem";
import {Footer} from "./Footer";
import { AddTodo } from './AddTodo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import About from './About';

function Home() {
  const[ todos,setTodos]=useState([ ])
  // let initTodo;
  // if(localStorage.getItem("todos")){
    
  //   initTodo=[];

  // }
  // else {
  //   initTodo=JSON.parse(localStorage.getItem("todos"));
  // }
  const onDelete=(todo)=>{
    console.log("I am deleted",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
   // localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
       let id=todos.length;
       console.log("adding todo",id,title,desc);
       const myTodo={
        id:id+1,
        title:title,
        desc:desc
       }
       setTodos([...todos,myTodo]);
       
        //localStorage.setItem("todos",JSON.stringify(todos));
      
  }
  
  return (
    <>
   
   <Header title="My ToDo List" searchc={true} />
   <AddTodo addTodo={addTodo}/>
   
   <Todos todos={todos} onDelete={onDelete}/>
   
   <Footer/>
 </>
  )
}




    
 

export default Home
