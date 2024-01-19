import React, {useContext, useEffect} from 'react';
import { todoContext } from "../../context/todoContext";
function TodoList(){
    const {todos, handleComplete} = useContext(todoContext)
    useEffect(() => {
        console.log(todos, "========")
    }, [todos])
    return(
        <>
        <h1>ToDo List</h1>
        {todos.map((todo) => (
        <div key={todo.id} style={{color: todo.isCompleted ? "red": "green"}}>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleComplete(todo)}
            />
            {todo.value}
          </label>
        </div>
      ))}
        </>
    )
}

export default TodoList;