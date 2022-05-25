import React from 'react'

export default function Division({sender}) {

    const numOne = sender.num1
    const numTwo = sender.num2
    var sum

    if((numOne === '' || numOne === NaN) && (numTwo === '' || numTwo === NaN)) {
        sum = 0;
    }else{
        sum = numOne / numTwo
    }
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h2 style={{color: "orange"}}>Division</h2>
        <br />
        <h3>Number 1: {numOne}</h3>
        <br />
        <h3>Number 2: {numTwo}</h3>
        <br />
        <h3>Sum: {sum}</h3>
        <br />
    </div>
  )
}
