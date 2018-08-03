import React from 'react';

const Beer = (props) => {
  return (
    <div className='beer-tile' key={props.index} id={`id${props.beer.id}`} onClick={props.onBeerClicked}>
      <div className='text-div'>
        <h3 className='title'>{props.beer.name}</h3>
        <p className='descr'>{props.beer.description}</p>
      </div>
      <div className='img-div'>
        <img className='img' height='400' width='200' src={props.beer.image_url} alt={props.beer.name} />
      </div>
    </div>
  )
}

export default Beer;
