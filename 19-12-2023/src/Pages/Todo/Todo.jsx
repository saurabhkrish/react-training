import React, {useCallback, useEffect, useState, useMemo} from 'react';
import './Todo.css';
import TodoForm from '../../Components/TodoForm';
import TodoList from '../../Components/TodoList';
import ToDoProvider from '../../context/todoContext';
function Todo() {
    return(
        <ToDoProvider>
            
            <TodoForm/>
            <TodoList />
        </ToDoProvider>
    )
}

export default Todo;