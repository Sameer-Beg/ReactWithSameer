import React from 'react'

const S2_ReusableComponents = () => {
    const SameerDetails = {
        name : 'sameer beg',
        age : 20,
        gmail : 'Sam@gmail.com',
        phoneNumber : 1234567890
    }
  return (
    <div>
      <h1>Name = {SameerDetails.name}</h1>
      <h2>Age = {SameerDetails.age}</h2>
      <h3>Gmail = {SameerDetails.gmail}</h3>
      <h4>Phone number = {SameerDetails.phoneNumber}</h4>
    </div>
  )
}

export default S2_ReusableComponents
