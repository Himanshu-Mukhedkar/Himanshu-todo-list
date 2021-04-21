import React from 'react'


const TodoList = ({ todos, setTodos }) => {


    const handleDelete = ({id}) => {
        const newTodos = todos.filter( (todo) =>  todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div>
            {
                todos.map( (todo) => {
                    return <li className="list-item" key={todo.id}>
                       <div className="todo-title">{todo.title} </div>
                      {/*  <input  value={todo.title} className="list" onChange={ (event) => event.preventDefault()}  />*/}
                        <div>
                            <button  className = "button-delete" onClick={() => handleDelete(todo)}>
                                <i className ="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                })
            }
        </div>
    )
}

export default TodoList
