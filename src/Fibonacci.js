import React from 'react'

function Fibonacci({sender}) {

    const numOne = sender.num1
    const numTwo = sender.num2
    var sum = numOne + numTwo
    var arrSum = []

    arrSum[0] = numOne;
    arrSum[1] = numTwo;
    arrSum[2] = sum;

    

    for (var i = 2; i <= 11; i++) {
        arrSum[i] = arrSum[i - 1] + arrSum[i - 2]
    }

    const myLoop = arrSum.map((arrSums) => <li>
        {arrSums}
    </li>)

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '1%'}}>
        <br></br>
        <h2>Fibonacci Order</h2>
        <ul>{myLoop}</ul>
    </div>
  )
}

export default Fibonacci