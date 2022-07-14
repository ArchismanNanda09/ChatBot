import React, { useEffect } from "react";
import './Todos.css';
const Todos=(props)=>{
    const { setState } = props  
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
      const five=data.slice(0,6)
      setState((state) =>({...state, todos: five}))
  });
    }, []);

    const renderTodos=()=>{
        props.todos.map(todo =>{
         <li className="todo-widget-list-item" key={todo.id}>
             {todo.title}
         </li>

        })
    }
    return <div className="todos-widget">
        <ul className="todos-widget-list"> 
        {renderTodos()}
        
        
        
        </ul>
        </div>
}
export default Todos;