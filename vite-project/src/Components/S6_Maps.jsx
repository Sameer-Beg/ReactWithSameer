import React from 'react'
import { data } from 'react-router-dom'

const S6_Maps = () => {

  const product = [
    {id:1 , title : "Apple" , product : "Watch" , price : "30000"},
    {id:2 , title : "Sonata" , product : "Watch" , price : "40000"},
    {id:3 , title : "FASTRAACK" , product : "Watch" , price : "500000"}
  ]
  return (
    <div>
      {product.map((data)=><div key={data.id}>
        <h1>title = {data.title}</h1>
        <h2>product = {data.product}</h2>
        <h3>price = {data.price}</h3>
        
      </div>)}
    </div>
  )
}

export default S6_Maps

