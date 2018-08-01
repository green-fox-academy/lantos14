import React from 'react';
import Beer from './beer';

const Beergrid = props => {
  if (props.list) {
    return (
      <div className='beer-grid'>
        {props.list.map((e, i) => {
          return (
            <Beer key={i} beer={e} index={i} />
          )
        })}
      </div>
    )
  } else {
    return null;
  }
}

export default Beergrid;
