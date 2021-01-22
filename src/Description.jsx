import React from 'react';
import Modal from '@material-ui/core/Modal';

var Description = (props) => {
  if ( props.listing === null) {
    return null;
  } else {
    return (
      <p>{props.listing.description.substr(0, 200)}
        ...
        <span>read more</span>
      </p>
    )
  }
}

export default Description;