import React from 'react';

const Beer = (props) => {
  return (
    <div className='beer-tile' key={props.index} id={`id${props.beer.id}`} onClick={props.onBeerClicked}>
      <h3 id={`id${props.beer.id}`}>{props.beer.name}</h3>
      <img id={`id${props.beer.id}`} height='300' width='150' src={props.beer.image_url} alt={props.beer.name} />
      <p id={`id${props.beer.id}`} className='descr'>{props.beer.description}</p>
    </div>
  )
}

export default Beer;
