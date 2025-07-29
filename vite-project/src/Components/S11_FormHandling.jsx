import React, { useState } from 'react'

const S11_FormHandling = () => {
    const [name , setname] = useState('sameerbeg')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')

    const handlesubbmit = (e) =>{
        e.preventDefault();
        alert("your form has been submited");

        setname('')
        setemail('')
        setpassword('')
    }
  return (
    <div>
      <form action="" onSubmit={handlesubbmit}>
        name = <input onChange={(e)=>setname(e.target.value)} value={name} type="text" /> <br /><br />
        email = <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" /> <br /> <br />
        pass = <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" /> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default S11_FormHandling
