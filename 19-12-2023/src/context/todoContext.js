import React, {createContext, useState, useReducer} from 'react';

export const todoContext = createContext();
const initialState = [{
    id: 1,
    value: "Food Items",
    isCompleted: true
}]
const reducer = (state, action) => {
    const {type, payload} = action;
    console.log(action)
    switch (action.type) {
        case "ADD_ITEM":
            return [ {id: state.length+1, ...payload}, ...state] ;
        case "COMPLETE": {
            console.log("test", state)
          return state.map((todo) => {
            if (todo.id === payload.id) {
              return { ...todo, isCompleted: !todo.isCompleted };
            } else {
              return todo;
            }
          });
        }
        default:
          return state;
      }
}
function ToDoProvider({children}){
    const [todos, dispatch] = useReducer(reducer, initialState);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", payload: todo });
      };
    // const [todos, setTodos] = useState([]);
    function updateTodos(todo) {
        dispatch({ type: "ADD_ITEM", payload: todo });
    }
    return(
        <todoContext.Provider value={{todos, updateTodos, handleComplete}}>
            {children}
        </todoContext.Provider>
    )
}

export default ToDoProvider;