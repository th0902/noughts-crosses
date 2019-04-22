import React from 'react';

export default props => {
  return (
    <td>
      <button className='square' onClick={props.onClick} key={props.value}>
        {props.value}
      </button>
    </td>
  );
};
