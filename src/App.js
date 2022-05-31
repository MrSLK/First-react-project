import React, {useState, useRef} from 'react';
import Addition from './Addition';
import Division from './Division';
import Multiplication from './Multiplication';
import Subtraction from './Subtraction';
import Fibonacci from './Fibonacci';


export default function App() {

  const [myValues, setmyValues] = useState('');

  const num1 = useRef(0);
  const num2 = useRef(0);

  const sender = () => {
    let newNum1 = parseInt(num1.current.value);
    let newNum2 = parseInt(num2.current.value);

    console.log("Number 1: " + newNum1);
    console.log("Number 2: " + newNum2);

    
    setmyValues({num1: newNum1, num2: newNum2});
  }
  return (

    <>
    <div>
    <input type="number" style={{margin: "1%"}} ref={num1} placeholder="Number 1"></input>
    <br />
    <input type="number" style={{margin: "1%"}} ref={num2} placeholder="Number 2"></input>
    <br />

        <button primary onClick={() => sender()}>Sum</button>
      </div>

    <Addition sender={myValues} />
    <Subtraction sender={myValues} />
    <Multiplication sender={myValues}  />
    <Division sender={myValues} />
    <Fibonacci sender={myValues} />
    </>
  )
}