import React from 'react';
import './fashion.css';



var Sleeping = (props) => {
  if ( props.listing === null) {
    return null;
  } else {
    var roomNum = 1;
    return (
      <div>
        <h2>Sleeping arrangements</h2>
        {props.listing.bedrooms.map( (bedroom) => (
          <div className="marquee-sleeping-span">
            <h3>Bedroom {roomNum++}</h3>
            <h6>{bedroom}</h6>
          </div>
        ))}
      </div>
    )
  }
}

export default Sleeping;