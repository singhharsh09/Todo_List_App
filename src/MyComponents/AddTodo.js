
import React,{useState} from 'react';

export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
               alert("Title or desc cannot be empty");
        }
        else{
        props.addTodo(title,desc)
        setDesc("");
        setTitle("");
        }
        
    }
  return (
    <div className='container'>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor ="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
    <div id="emailHelp" className="form-text">Add the title</div>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="dexc"/>
  </div>
  
  

<button type='submit' className='btn btn-sm btn-success '>Add Todo</button>
</form>
    </div>
  )
}
