import React, {useContext, useState, useRef} from "react";
import './TodoForm.css';
import { todoContext } from "../../context/todoContext";
function TodoForm(){
    const {updateTodos} = useContext(todoContext)
   const todoInputField = useRef()
    // const [item, setItem] = useState('')
    function getAddTodoItem(e) {
        e.preventDefault()
        console.log("todoInputField", todoInputField.current.value)
        updateTodos({value: todoInputField.current.value, isCompleted: false});
    }
    return(
        <>
            <h1 className="page1" >Todo Application</h1>
            <form action="" name="todof">
            {/* <input type="text" name="todo" value={item} onChange={(e) => setItem(e.target.value)}/> */}
            <input type="text" name="todo" ref={todoInputField}/>
            <button type="button" onClick={getAddTodoItem}>Add Item</button>
            </form>
        </>
    ) 
}
 
export default TodoForm;