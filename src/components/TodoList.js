import React, { useState } from 'react'


const TodoList = ({ todos, setTodos }) => {


    const handleDelete = ({id}) => {
        console.log(todos, id );
       setTodos(todos.filter( (todo) =>  todo.id !== id));
    }

    return (
        <div>
            {
                todos.map( (todo) => {
                    return <li className="list-item" key={todo.id}>
                        {/*<div>{todo.title} </div>*/}
                        <input  value={todo.title} className="list" onChange={ (event) => event.preventDefault()}  />
                        <div>
                            <button  className = "button-delete" onClick={() => handleDelete(todo)}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                })
            }
        </div>
    )
}

export default TodoList
