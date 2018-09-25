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
      comingSoon = <h1 className="base-font mb-0">{text}</h1>;
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
