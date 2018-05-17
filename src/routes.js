import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "scenes/Home";
import {About} from 'scenes/About';
import {Lookbook} from 'scenes/Lookbook';
import {Shop} from 'scenes/Shop';

export default() =>
<Switch>
  <Redirect from='/home' to='/'/>
  <Route exact={true} path='/' component={Home}></Route>
  <Route exact={true} path='/about' component={About}></Route>
  <Route exact={true} path='/lookbook' component={Lookbook}></Route>
  <Route exact={true} path='/shop' component={Shop}></Route>
</Switch>;
