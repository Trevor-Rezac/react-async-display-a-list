import React from 'react';
import Car from './Car';

export default function CarList({ cars }) {
  return <>
    <h2>Car List</h2>
    <div className='car-list'>
      {cars.map((car, i) => <Car key={`${car}-${i}`} car={car} />)}
    </div>
  </>;
}
