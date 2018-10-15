import React, { Component } from "react";
import propTypes from "prop-types";

export default class ComingSoon extends Component {
  render() {
    const { bgImage, text } = this.props;

    let comingSoon;

    var divStyle = {
      color: "white",
      backgroundImage: "url(" + bgImage + ")"
    };

    if (text) {
      comingSoon = (
        <h2 className="base-font text-uppercase font-weight-bold mb-0">
          {text}
        </h2>
      );
    }

    return (
      <div
        className="uk-background-cover uk-background-blend-overlay uk-background-secondary hv-center"
        style={divStyle}
      >
        {comingSoon}
      </div>
    );
  }
}

ComingSoon.propTypes = {
  bgImage: propTypes.string.isRequired,
  text: propTypes.string
};
