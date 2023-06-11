import React from 'react'

const Logical = (props) => {

    const cars = props.cars;
    // &&
  return (
    <div>
       <h1>Garage</h1>
       {
        cars.length > 0 &&
        <h2>You have {cars.length} cars in your garage</h2>
       }
    </div>
  )
}

export default Logical