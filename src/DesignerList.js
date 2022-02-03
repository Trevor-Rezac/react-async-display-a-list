import React from 'react';
import Designer from './Designer';

export default function DesignerList({ cardDesigners }) {
  return <>
    <h2>Card Designers & Companies</h2>
    <div className='designer-list'>
      {cardDesigners.map((designer, i) => <Designer key={`${designer}-${i}`} designer={designer} />)}
    </div>
  </>;
}
