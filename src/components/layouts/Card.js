import React from 'react';

import circle from '../../images/circle.png'

const Card = ({name, category}) => {
  return (
    <div className='card'>
      <img src={circle} alt="circle" />
      <div className="text-content">
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
    </div>
  )
}

export default Card;