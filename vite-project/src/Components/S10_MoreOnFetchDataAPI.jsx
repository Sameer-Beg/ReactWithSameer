import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const S10_MoreOnFetchDataAPI = () => {

    const [dataIPI , setDAtaAPI] = useState([])
    useEffect(()=>{
        const fetchdataapi = async()=>{
            const api = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await api.json();
            setDAtaAPI(data);
            console.log("My data" , data)
        }
        fetchdataapi();
    }, [] )
  return (
    <div style={{backgroundColor:"yellow"}}>{dataIPI.map((data)=><div key={data.id}>
        <h2>{data.title}</h2>
    </div>)}</div>
  )
}

export default S10_MoreOnFetchDataAPI
