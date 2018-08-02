import React from 'react';
import Beer from './beer';

const Beergrid = props => {
  if (props.list.error) {
    console.log(props.list.error);
    return null;
  }
  if (props.list.length !== 0) {
    return (
      <div className='beer-grid'>
        {props.list.map((e, i) => {
          return (
            <Beer key={i} beer={e} index={i} onBeerClicked={props.onBeerClicked} />
          )
        })}
      </div>
    )
  } else {
    return null;
  }
}

export default Beergrid;
