import React, { useEffect, useState } from 'react'

const S13_UseEffect = () => {
    const [ counter , setcounter] = useState(0)
    useEffect(()=>{
        document.title= counter;
        console.log("useeffect..")

    }, [counter])

    const increse = ()=>{
        setcounter(counter+1)
    }
    const decrese  = ()=>{
        setcounter(counter-1)

    }
  return (
    <div>
      <h1>We r learning useeffect </h1>
      <h1>{counter}</h1>
      <button onClick={increse}>increse</button>
      <button onClick={decrese}>decrese</button>

    </div>
  )
}

export default S13_UseEffect
