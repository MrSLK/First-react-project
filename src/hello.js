import React, {useRef} from 'react'

function Hello() {

    const firstNumRef = useRef(null);
    const secondNumRef = useRef(null);

       function getSum() {
        const myNum = parseInt(firstNumRef.current.value)
        // myNum = parseInt(myNum)
        console.log("First number: " + myNum)
        const mySecondNum = parseInt(secondNumRef.current.value)
        // mySecondNum = parseInt(mySecondNum)
        console.log("First number: " + mySecondNum)

        var sum = myNum + mySecondNum
        console.log("Sum: " + sum)

        return sum
        
    }

    return (    
    <div>
        <h1>Hello!</h1>
  
        <h2>Enter 2 numbers</h2>
  
        <h3>Num 1: </h3>
            <input type="number" ref={firstNumRef}/>
      
          <h3>Num 2: </h3>
            <input type="number" ref={secondNumRef}/>
  
            <button type="submit" onClick={getSum}> Get Sum </button>

            {/* <h3>Sum: {sum}</h3> */}
      </div> 
      );
}

export default Hello;