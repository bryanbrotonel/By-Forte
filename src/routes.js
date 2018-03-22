import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./scenes/home/home";
import {About} from 'scenes/about/about';
import {Lookbook} from 'scenes/lookbook/lookbook';
import {Shop} from 'scenes/shop/shop';

export default() =>
<Switch>
  <Redirect from='/home' to='/'/>
  <Route exact={true} path='/' component={Home}></Route>
  <Route exact={true} path='/about' component={About}></Route>
  <Route exact={true} path='/lookbook' component={Lookbook}></Route>
  <Route exact={true} path='/shop' component={Shop}></Route>
</Switch>;
