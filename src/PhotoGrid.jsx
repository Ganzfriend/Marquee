import React from 'react';
import './photo-grid.css';
import Skeleton from '@material-ui/lab/Skeleton';

const OBJECT_URL = 'https://destinationcapstone.sfo2.digitaloceanspaces.com/';


var PhotoGrid = (props) => {
  var photosList = [];
  if (props.listing === null) {
    for (let i = 0; i < 5; i++) {
      photosList[i] = (<Skeleton variant="rect" />);
    }
  } else {  //if not null, should mean we have a displayRecord to pull from
    photosList = props.listing.pictures.map( (imgName) => {
      // hardcoded for jpg
      return `${OBJECT_URL}${imgName}.jpg`;
    });
  }


  return (
    <div className="photo-grid">
      <img className="main-photo-item" src={photosList[0]} />
      <img className="photo-item item-a" src={photosList[1]} />
      <img className="photo-item item-b" src={photosList[2]} />
      <img className="photo-item item-c" src={photosList[3]} />
      <img className="photo-item item-d" src={photosList[4]} />
    </div>
  )
}

export default PhotoGrid;