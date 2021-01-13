import React from 'react';
import ReactDOM from 'react-dom';


class Marquee extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
      return (
          <div>MARQUEE MOON</div>
      );
  }
}

ReactDOM.render(<Marquee />, document.getElementById('marquee'));