import React, { useEffect, useState } from 'react'

const S8_UseEffect = () => {
  const [counter , setcounter] = useState(0);
    
  useEffect(() => {
    document.title = counter;
  console.log("here we r learning useeffect ");
}, [counter]);


    const increse = ()=>{
      setcounter(counter+1)

    }
    const decrese = ()=>{
      setcounter(counter-1)

    }
  return (
    <div>
      <h1>We r lerning useeffect </h1>
      <h2>{counter}</h2>
      <button onClick={increse}>Increse</button>
      <button onClick={decrese}>decrse</button>
    </div>
   
  )
}

export default S8_UseEffect
