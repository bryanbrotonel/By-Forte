import React from "react";
import PropTypes from "prop-types";

import { Route, Navigate } from "react-router-dom";

import Loading from "../Loading";

import { authValidate } from "../../helpers/dbHelpers";

export default class ShopRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isAuthenticated: false
    };
  }
  componentDidMount() {
    const self = this;

    authValidate().then(result => {
      self.setState({
        loading: false,
        isAuthenticated: result
      });
    });
  }

  render() {
    const { component: Component, location: Location, ...rest } = this.props;
    const { loading, isAuthenticated } = this.state;

    if (loading) {
      return <Loading />;
    } else {
      return (
        <Route
          {...rest}
          render={props =>
            !isAuthenticated ? (
              <Navigate
                to={{
                  pathname: "/shop",
                  state: { from: Location }
                }}
              />
            ) : (
              <Component {...props} />
            )
          }
        />
      );
    }
  }
}

ShopRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.any
};
