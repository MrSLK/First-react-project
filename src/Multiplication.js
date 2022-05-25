import React from 'react'

export default function Multiplication({sender}) {

    const numOne = sender.num1
    const numTwo = sender.num2
    var sum

    if((numOne === '' || numOne === NaN) && (numTwo === '' || numTwo === NaN)) {
        sum = 0;
    }else{
        sum = numOne * numTwo
    }
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h2 style={{color: "orange"}}>Multiplaction</h2>
        <br />
        <h3>Number 1: {numOne}</h3>
        <h3>Number 2: {numTwo}</h3>
        <h3>Sum: {sum}</h3>
    </div>
  )
}
