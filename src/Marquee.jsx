import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './PhotoGrid.jsx';
import Title from './Title.jsx';
import Divider from '@material-ui/core/Divider';
import Policies from './Policies.jsx';
import Description from './Description.jsx';
import Sleeping from './Sleeping.jsx';
import Amenities from './Amenities.jsx';
import './fashion.css';
import {
  BrowserRouter as Router,
  Switch, Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import { withRouter } from 'react-router';

const axios = require('axios');


const Marquee = () => {
  var { id } = useParams();
  var [displayRecord, setDisplayRecord] = useState(null);

  useEffect( () => {
    getListingFromServer(id);
  }, [id]);

  var getListingFromServer = (id = 'random') => {
    axios.get(`http://3.101.149.145:3004/api/listing/${id}`)
      .then((response) => {
        console.log('received listing from server: ', response);
        setDisplayRecord(response.data);
      })
      .catch((error) => {
        console.log('error fetching listing from server', error);
      });
  }

  /*
  componentDidMount() {
    this.props.history.listen( () => {
      this.getListingFromServer(6);
    })

    if (this.state.displayRecord === null) {
      this.getListingFromServer();
    }
  }
  */

  return (
    <div className="marquee-app">
      <Title listing={displayRecord} />
      <PhotoGrid listing={displayRecord} />
      <Divider />
      <Policies listing={displayRecord} />
      <Divider />
      <Description listing={displayRecord} />
      <Divider />
      <Sleeping listing={displayRecord} />
      <Divider />
      <Amenities listing={displayRecord} />
    </div>
  );
}

export default Marquee;

//const MarqueeWithRouter = withRouter(Marquee);

//ReactDOM.render(<Router> <MarqueeWithRouter /> </Router>, document.getElementById('marquee'));
//ReactDOM.render(<Marquee /> , document.getElementById('marquee'));