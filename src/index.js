import React from 'react';
import ReactDOM from 'react-dom';
import PhotoTiles from './PhotoTiles.jsx';
const axios = require('axios');


class Marquee extends React.Component {
  constructor() {
    super();
    this.state = {
      displayRecord: null
    }

    this.getListingFromServer = this.getListingFromServer.bind(this);
  }

  getListingFromServer() {
    axios.get('/listing/5fffa8a5a2e0728842416112')
      .then((response) => {
        console.log('received listing from server: ', response);
        this.setState({displayRecord: response.data})
      })
      .catch((error) => {
        console.log('error fetching listing from server', error);
      });
  }

  componentDidMount() {
    if (this.state.displayRecord === null) {
      this.getListingFromServer();
    }
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