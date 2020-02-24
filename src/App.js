import React from 'react';
import './App.css';
import './mock/mock.js';
import { Provider } from 'react-redux';
import store from './store/index.js';

import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Getan from './components/Getan.js'
import Detail from './components/Detail.js'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/getan' component={Getan} />
                <Route path='/detail/:id' component={Detail} />
                <Redirect from='/' to='/home' />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
