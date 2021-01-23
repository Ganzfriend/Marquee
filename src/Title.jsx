import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import StarIcon from '@material-ui/icons/Star';


var Title = (props) => {
  if (props.listing === null) {  // skeletons
    return ( <Skeleton variant="text" />)
  } else {  //should have a record available
    return (
        //use reace fragment here?
      <div>
        <h2>{props.listing.title}</h2>
        <h3>
          <StarIcon />
          {props.listing.rating}
          -
          {props.listing.location}
        </h3>
      </div>
    )
  }
}

export default Title;