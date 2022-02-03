import React from 'react';

export default function Designer({ designer }) {
  return <div className='designer-container'>
    <h3 className='designer-name'>({designer.id}) {designer.Designer}</h3>
    <p>Founder: {designer.Founder}</p>
    <p>Established: {designer.Established}</p>
    <p>Decks Owned: {designer.decks_owned}</p>
  </div>;
}
