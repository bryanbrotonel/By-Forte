import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "scenes/Home";
import { About } from "scenes/About";
import { Lookbook } from "scenes/Lookbook";
import { Shop } from "scenes/Shop";
import { ProductInfo } from "./scenes/Product Info";
import { Cart } from "./scenes/Cart";
import { Checkout } from "./scenes/Checkout";

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about" component={About} />
    <Route exact={true} path="/lookbook" component={Lookbook} />
    <Route exact={true} path="/shop" component={Shop} />
    <Route
      path="/shop/collections/tops/products/:itemId"
      component={ProductInfo}
    />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);

export default Routes;
