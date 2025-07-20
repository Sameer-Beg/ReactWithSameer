import React from 'react'

const S1_objDeclaration = () => {
    const persson = {
        name : 'Sameer beg',
        age : 20,
        Gmail : 'Sam@gmail.com'
    }
    const product = {
        Productname : 'ApllePhone',
        Brand : 'Aplle',
        price : 30000
    }
  return (
   <>
   <div>
    <h1>PersonName = {persson.name}</h1>
    <h2>Personeage = {persson.age}</h2>
    <h3>PersonEmail = {persson.Gmail}</h3>
   </div>
   <div>
    <h1>ProductNAme = {product.name}</h1>
    <h2>ProductBrand = {product.Brand}</h2>
    <h3>ProductPrice = {product.price}</h3>
   </div>
   </>
  )
}

export default S1_objDeclaration
