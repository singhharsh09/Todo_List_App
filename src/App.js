import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from "./MyComponents/header";
import {Todos} from "./MyComponents/Todos";
import {TodoItem} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './MyComponents/Home';
import About from './MyComponents/About';

function App() {
  // const[ todos,setTodos]=useState([ ])
  // // let initTodo;
  // // if(localStorage.getItem("todos")){
    
  // //   initTodo=[];

  // // }
  // // else {
  // //   initTodo=JSON.parse(localStorage.getItem("todos"));
  // // }
  // const onDelete=(todo)=>{
  //   console.log("I am deleted",todo);

  //   setTodos(todos.filter((e)=>{
  //     return e!==todo;
  //   }))
  //  // localStorage.setItem("todos",JSON.stringify(todos));
  // }
  // const addTodo=(title,desc)=>{
  //      let id=todos.length;
  //      console.log("adding todo",id,title,desc);
  //      const myTodo={
  //       id:id+1,
  //       title:title,
  //       desc:desc
  //      }
  //      setTodos([...todos,myTodo]);
       
  //       //localStorage.setItem("todos",JSON.stringify(todos));
      
  // }
  
  return (
   <BrowserRouter>
   <Home/>
   <Routes>
    {/* <Route path='/' element=<Header/>></Route> */}
    <Route path='/about' element=<About/>> </Route>
   
   
   </Routes>
 
   </BrowserRouter>
  )
}


export default App;
