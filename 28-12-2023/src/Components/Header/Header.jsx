import React, {LinkHTMLAttributes, useEffect} from "react";
import './Header.css';
import Logo from '../../assets/logo512.png'
function Header({title="Saurabh", setNum, num, setUserName}){
    const IncrementNum = () => {
        setNum(num+1)
    }
    const DecrementNum = () => {
        setNum(num-1)
    }
   
    function getUserName() {
        const userName = {fname:"Saurabh", lname:"Shukla"}
        console.log(userName.fname + " " + userName.lname)
        setUserName(userName.fname + " " + userName.lname);
    }
    return(
        <>
            <h1 className="page1">{title}</h1>
            <button onClick={getUserName}>Get User Name</button>
            <button type='button' onClick={IncrementNum}>Increment</button>
            <button type='button' onClick={DecrementNum}>Decrement</button>
        </>
    ) 
}
 
export default Header;