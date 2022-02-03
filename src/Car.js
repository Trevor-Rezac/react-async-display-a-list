import React from 'react';

export default function Car({ car }) {
  return <div className='car-container' style={{ background: car.Color }} >
    <h3>{car.Year} {car.Manufacturer}</h3>
    <p>{car.Model}</p>
    <p>Mileage: {car.Mileage}</p>
  </div>;
}
