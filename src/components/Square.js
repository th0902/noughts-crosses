import React from 'react';

const Square = props => {
  return (
    <td>
      <button className='square' onClick={props.onClick} key={props.value}>
        {props.value}
      </button>
    </td>
  );
};

export default Square;
