import React from "react";
import PropTypes from "prop-types";

import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "./components/Loading";
import { authValidate } from "./helpers/dbHelpers";

const homeLoadable = Loadable({
  loader: () => import("./scenes/Home"),
  loading: Loading
});

const aboutLoadable = Loadable({
  loader: () => import("./scenes/About"),
  loading: Loading
});

const editorialLoadable = Loadable({
  loader: () => import("./scenes/Editorial"),
  loading: Loading
});

const shopLoadable = Loadable({
  loader: () => import("./scenes/Shop"),
  loading: Loading
});

const productInfoLoadable = Loadable({
  loader: () => import("./scenes/Product Info"),
  loading: Loading
});

const cartLoadable = Loadable({
  loader: () => import("./scenes/Cart"),
  loading: Loading
});

const checkoutLoadable = Loadable({
  loader: () => import("./scenes/Checkout"),
  loading: Loading
});

const contactLoadable = Loadable({
  loader: () => import("./scenes/Contact"),
  loading: Loading
});

const termsAndConditionsLoadable = Loadable({
  loader: () => import("./scenes/Terms and Conditions"),
  loading: Loading
});

const refundPolicyLoadable = Loadable({
  loader: () => import("./scenes/Refund Policy"),
  loading: Loading
});

const pageNotFoundLoadable = Loadable({
  loader: () => import("./scenes/Page Not Found"),
  loading: Loading
});

const ShopRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !authValidate() ? <Redirect to="/shop" /> : <Component {...props} />
    }
  />
);

ShopRoute.propTypes = {
  component: PropTypes.func
};

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact={true} path="/" component={homeLoadable} />
    <Route exact={true} path="/about" component={aboutLoadable} />
    <Route exact={true} path="/editorial" component={editorialLoadable} />
    <Route exact={true} path="/shop" component={shopLoadable} />
    <ShopRoute
      path="/shop/collections/tops/products/:itemName/:itemVariation"
      component={productInfoLoadable}
    />
    <ShopRoute path="/cart" component={cartLoadable} />
    <ShopRoute path="/checkout" component={checkoutLoadable} />
    <Route path="/contact" component={contactLoadable} />
    <Route
      path="/terms-and-conditions"
      component={termsAndConditionsLoadable}
    />
    <Route path="/refund-policy" component={refundPolicyLoadable} />
    <Route path="*" exact={true} component={pageNotFoundLoadable} />
  </Switch>
);

export default Routes;
