import React from 'react';

var Description = (props) => {
  if ( props.listing === null) {
    return null;
  } else {
    return (
      <p> {props.listing.description} </p>
    )
  }
}

export default Description;