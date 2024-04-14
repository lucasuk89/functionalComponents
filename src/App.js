
import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

export default function App(){
const [saludo,setSaludo] = useState(1)

useEffect(()=>{
  console.log("Vamos aumentar?")
},[saludo])
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=> setSaludo (saludo+1)}       
          >
        {saludo}
          </a>
        </header>
      </div>
    );
  }

//Changes to make a pull to train

  // https://www.youtube.com/watch?v=Bx7taFW0XbY

  
