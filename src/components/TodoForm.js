import React from 'react'
//import {v4 as uuidV4 } from 'uuid';

const TodoForm = ( { input , setInput,  todos, setTodos}) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([ ...todos, { id: Math.floor(Math.random()*1000) , title: input }])
        setInput('');
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}> 
                <input className="task-input" 
                    type = "text" 
                    placeholder="Add a todo..." 
                    value={input}
                    name='text'
                    required
                    onChange={handleChange}
                    ></input>
                <button className='button-add '>Add</button>
            </form>
        </div>
    )
}

export default TodoForm

