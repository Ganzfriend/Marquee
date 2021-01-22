import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './PhotoGrid.jsx';
import Title from './Title.jsx';
import Divider from '@material-ui/core/Divider';
import Policies from './Policies.jsx';
import Description from './Description.jsx';
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
            <Title listing={this.state.displayRecord} />
            <PhotoGrid listing={this.state.displayRecord} />
            <Divider />
            <Policies listing={this.state.displayRecord} />
            <Divider />
            <Description listing={this.state.displayRecord} />
            <Divider />
          </div>
      );
  }
}

ReactDOM.render(<Marquee />, document.getElementById('marquee'));