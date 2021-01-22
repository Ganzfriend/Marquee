import React from 'react';

var Sleeping = (props) => {
  if ( props.listing === null) {
    return null;
  } else {
    return (
      <p> {props.listing.description} </p>
    )
  }
}

export default Sleeping;