import React from "react";
//Import components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return(
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo 
            setTodos={setTodos}
            todos={todos} 
            key={todo.id}
            todo={todo}
            text={todo.text}/> //we can add an id
          ))}
        </ul>
      </div>
    );
};

export default TodoList;