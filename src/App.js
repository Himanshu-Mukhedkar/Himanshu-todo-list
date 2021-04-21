import React,  { useState } from 'react';
import './App.scss';
import Header from './components/Header'
import Todoform from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [input , setInput ] = useState('');
  const [todos , setTodos ] = useState([]);

  return (
    <div className= "container">
      <div className = "app-wrapper"> 
        <div>
          <Header />
        </div>

        <div>
          <Todoform 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          
          />
        </div>

        <div>
          <TodoList 
            todos={todos}
            setTodos={setTodos} />
        </div>
      </div>
    </div>
   
  );
}

export default App;
