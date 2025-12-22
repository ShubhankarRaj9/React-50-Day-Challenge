import React, { useState } from 'react'

const TodoList = () => {

    const [todos,setTodos] = useState([]);
    // handle input values
    const [inputValue,setInputValue] = useState("");
    const handleSubmit = (event) =>{
     event.preventDefault();
     if(inputValue.trim()){
        setTodos([...todos,inputValue]);
        setInputValue('');
         }
    };
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

  return (
    <div >
       <h1>Todo List</h1>
       <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Add A New Todo' />
        <button type='submit'> Add Todo </button>
       </form>
       <ul>
        {
            todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default TodoList