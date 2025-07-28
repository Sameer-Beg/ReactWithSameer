import React, { useState } from 'react'

const S5_UseState = () => {
    const [counter , setcounter] = useState(0)

    const increse = ()=>{
        setcounter(counter+1)
        console.log("counter = " ,counter)
    }
    const decrese =()=>{
        setcounter(counter-1)
        console.log("Counter = " , counter)
    }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increse}>increse</button>
      <button onClick={decrese}>decrese</button>
    </div>
  )
}

export default S5_UseState
