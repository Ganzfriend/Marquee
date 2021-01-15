import React from 'react';
import ReactDOM from 'react-dom';
import PhotoTiles from './PhotoTiles.jsx';
const axios = require('axios');


class Marquee extends React.Component {
  constructor() {
    super();
    this.state = {
      displayRecord: ['exterior1', 'interior2', 'interior3']
    }

    this.getListingFromServer = this.getListingFromServer.bind(this);
  }

  getListingFromServer() {
    axios.get('/listing/44')
      .then((response) => {
        console.log('received listing from server: ', response);
        this.setState({displayRecord: response.data})
      })
      .catch((error) => {
        console.log('error fetching listing from server', error);
      });
  }

  componentDidMount() {
    //this.getListingFromServer();
  }

  render() {
      return (
          <div>
            <PhotoTiles listing={this.state.displayRecord} />
            
          </div>
      );
  }
}

ReactDOM.render(<Marquee />, document.getElementById('marquee'));