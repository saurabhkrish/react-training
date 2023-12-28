import React, {useState} from 'react';
import {Header, Search} from '../../Components/Header'
import './Home.css';

function Home() {
    const [num, setNum] = useState(0);
    const [data, setData] = useState("Name");
    const [userName, setUserName] = useState('')
    function getUserName(userName) {
        console.log(userName.fname + " " + userName.lname)
        // setUserName(userName.fname + " " + userName.lname);
    }
    return(
        <div>
            <h1>{userName}</h1>
            <Header 
                // title="Welcome to Krish Technolabs"
                setNum= {setNum}
                num ={num}
                setUserName = {setUserName}
             />
             <Search title="My React Class"/>
            
            <h2 className='body'>Body</h2>
            <h3>Footer</h3>
            <span style={{color:"red", backgroundColor:"yellow"}}>{num}</span>
            
        </div>
    )
}

export default Home;