import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const S9_fetch_data_API = () => {

    const [apidata , setapidata] = useState([])


    useEffect(()=>{
        const fetchdataapi = async()=>{
            const api = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await api.json();
            setapidata(data)
            console.log("my data" , data)
        }
        //call
        fetchdataapi();
    }, [])
  return (
    <div>{apidata.map((data)=><div key={data.id}>
        <h3>{data.title}</h3>
    </div>)}</div>
  )
}

export default S9_fetch_data_API
