import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Marquee from './Marquee.jsx';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
      };
    }
  
    

    render() {
      // eslint-disable-next-line no-unused-vars
      return (
        <HashRouter>
          <Switch>
            <Route path='/listing/:id'>
              <div>
                <Marquee />
              </div>
            </Route>
          </Switch>
        </HashRouter>
      );
    }
  }
  
  //export default App;
ReactDOM.render(<App />, document.getElementById('marquee'));