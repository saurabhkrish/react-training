import React, {useState} from 'react';
import Header from '../../Components/Header'
import './Home.css';

function Home() {
    const [num, setNum] = useState(0);

    return(
        <div>
            <Header 
                // title="Welcome to Krish Technolabs"
                setNum= {setNum}
                num ={num}
             />
            <h2>Body</h2>
            <h3>Footer</h3>
            <span>{num}</span>
            
        </div>
    )
}

export default Home;