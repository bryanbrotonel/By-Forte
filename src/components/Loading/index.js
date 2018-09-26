import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Loading extends Component {
  render() {
    const { error, retry, pastDelay, timedOut } = this.props;

    if (error) {
      return (
        <div className="container hv-center text-muted">
          <h2>LOADING</h2>
          <h5>error</h5>
          <button className="uk-button uk-button-default" onClick={retry}>
            Retry
          </button>
        </div>
      );
    } else if (timedOut) {
      return (
        <div className="container hv-center text-muted">
          <h2>LOADING</h2>
          <h5>{timedOut}</h5>
          <button className="uk-button uk-button-default" onClick={retry}>
            Retry
          </button>
        </div>
      );
    } else if (pastDelay) {
      return (
        <div className="container hv-center text-muted">
          <h2>LOADING</h2>
          <h5>{pastDelay}</h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

Loading.propTypes = {
  error: PropTypes.object,
  retry: PropTypes.func,
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool
};
