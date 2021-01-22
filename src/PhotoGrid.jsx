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
      return (<img src={OBJECT_URL + imgName + '.jpg'} />)
    });
  }


  return (
    <div className="photo-grid">
      <div className="photo-item main-photo-item">
        {photosList[0]}
      </div>
      <div className="photo-item item-a">
        {photosList[1]}
      </div>
      <div className="photo-item item-b">
        {photosList[2]}
      </div>
      <div className="photo-item item-c">
        <Skeleton variant="rect" />
      </div>
      <div className="photo-item item-d">
        <Skeleton variant="rect" />
      </div>
    </div>
  )
}

export default PhotoGrid;