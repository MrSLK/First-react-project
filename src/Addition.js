import React from 'react'

export default function Addition({sender}) {

    const numOne = sender.num1
    const numTwo = sender.num2
    var sum

    if((numOne === '' || numOne === NaN) && (numTwo === '' || numTwo === NaN)) {
        sum = 0;
    }else{
        sum = numOne + numTwo
    }
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <br />
        <h2 style={{color: "orange"}}>Addition: </h2>
        <br />
        <br />
        <h3>Number 1: {numOne}</h3>
        <h3>Number 2: {numTwo}</h3>
        <h3>Sum: {sum}</h3>
    </div>
  )
}
