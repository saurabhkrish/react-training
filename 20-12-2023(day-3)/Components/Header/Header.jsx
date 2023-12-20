import React, {LinkHTMLAttributes} from "react";
import './Header.css';
import Logo from '../../assets/logo512.png'
function Header({title="Saurabh", setNum, num}){
    const IncrementNum = () => {
        setNum(num+1)
    }
    const DecrementNum = () => {
        setNum(num-1)
    }
    return(
        <>
            <h1>{title}</h1>
            <button type='button' onClick={IncrementNum}>Increment</button>
            <button type='button' onClick={DecrementNum}>Decrement</button>
        </>
    ) 
}

export default Header;