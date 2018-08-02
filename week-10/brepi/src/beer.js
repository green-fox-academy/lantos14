import React from 'react';

const Beer = (props) => {
  return (
    <div className='beer-tile' key={props.index} id={props.beer.id}>
      <h3>{props.beer.name}</h3>
      <img height='300' width='150' src={props.beer.image_url} alt={props.beer.name} />
      <p className='descr'>{props.beer.description}</p>
    </div>
  )
}

export default Beer;
