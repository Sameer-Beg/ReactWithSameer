import React from 'react'
import { data } from 'react-router-dom'

const S7_filter = () => {
      const products = [
    {id:1 , title : "Apple" , category : "Watch" , price : "30000"},
    {id:2 , title : "Apple" , category : "Watch" , price : "30000"},
    {id:2 , title : "Sonata" , category : "phone" , price : "40000"},
    {id:3 , title : "FASTRAACK" , category : "mouse" , price : "500000"}
  ]

  const filterData = products.filter((data) => data.category == "mouse")
  console.log(filterData)
  return (
    <div>
      <h1>Filter </h1>
      <h2>{filterData.map((data)=><div key={data.id}>
        <h1>{data.title}</h1>
        <h2>{data.category}</h2>
        <h3>{data.price}</h3>
      </div>)}</h2>
    </div>
  )
}

export default S7_filter
