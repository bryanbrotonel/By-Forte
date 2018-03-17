import React, {Component} from 'react';
import 'components/navbar/navbar.scss';
import { Switch, Route} from 'react-router-dom';
import {NavBar} from 'components/navbar/navbar'

// Import all scenes
import {Home} from 'scenes/home/home'
import {About} from 'scenes/about/about'
import {Lookbook} from 'scenes/lookbook/lookbook'
import {Shop} from 'scenes/shop/shop'


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

export default App;
