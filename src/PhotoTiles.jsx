import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';

const OBJECT_URL = 'https://destinationcapstone.sfo2.digitaloceanspaces.com/';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 600,
      height: 400,
    },
  }));

  var PhotoTiles = (props) => {
    const classes = useStyles();
    var photosList = props.listing;

    if (photosList === null) {
      return (
        <div>
          <GridList cellHeight={160} cols={3} rows={2}>
            <GridListTile cols={2} rows={2}>
              <Skeleton variant="rect" />
            </GridListTile>
            <GridListTile cols={1} rows={1}>
              <Skeleton variant="rect" />
            </GridListTile>
            <GridListTile cols={1} rows={1}>
              <Skeleton variant="rect" />
            </GridListTile>
          </GridList>
        </div>
      )
    }

    //if here, then there should be a displayRecord to pull from

    photosList = props.listing.pictures;

    console.log(photosList);
    photosList = photosList.map((imgName) => {
        // TODO hardcoded for jpg
      return `${OBJECT_URL}${imgName}.jpg`;
    });
    console.log(photosList);
    var mainPic = photosList.shift();
    console.log(mainPic);
    
    var mainTile = (
        <GridListTile key={mainPic} cols={2} rows={2}>
          <img src={mainPic} />
        </GridListTile>
    )
    

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3} rows={2}>
          {mainTile}
          {photosList.map((tile) => (
          <GridListTile key={tile} cols={1} rows={1}>
            <img src={tile} />
          </GridListTile>
        ))}
        </GridList>
      </div>
    );

  }

  export default PhotoTiles;

  /*
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3} rows={2}>
        {mainTile}
        {photosList.map((tile) => (
          <GridListTile key={tile} cols={1} rows={1}>
            <img src={tile} />
          </GridListTile>
        ))}
        </GridList>
      </div>
    );


  */