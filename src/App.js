import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nologinhome from './page/home/nologin/index';
import Loging from './page/home/loging/index';
import Layout from './page/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/none1' component={Nologinhome} />
          <Route path='/home' component={Loging} />
          <Route path='/project' component={Layout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
