import React, {Component} from 'react';
import 'components/navbar/navbar.scss';
import { Switch, Route} from 'react-router-dom';

import {NavBar} from 'components/navbar/navbar'
import {About} from 'scenes/about/about'

class App extends Component {
  render() {
    return (<div className="App container">
      <NavBar/>
      <Main/>
    </div>);
  }
}

// Routes to components
const Main = () => (
  <Switch>
    <Route exact="exact" path='/' component={Home}></Route>
    <Route exact="exact" path='/about' component={About}></Route>
    <Route exact="exact" path='/lookbook' component={Lookbook}></Route>
    <Route exact="exact" path='/shop' component={Shop}></Route>
  </Switch>);

// Component placeholders
const Home = () => (
  <div className="Home">
    <h1>HOME</h1>
  </div>
);

const Lookbook= () => (
  <div className="Lookbook">
    <h1>LOOKBOOK</h1>
  </div>
);

const Shop= () => (
  <div className="Shop">
    <h1>SHOP</h1>
  </div>
);

export default App;
