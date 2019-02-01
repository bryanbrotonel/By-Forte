import React from "react";
import propTypes from "prop-types";

import "./styles.css";

class VideoBackground extends React.Component {
  render() {
    const { pageContent } = this.props;

    const divStyle = { backgroundColor: "black" };

    return (
      <div className="uk-cover-container" style={divStyle}>
        <h1>Fuck</h1>
        <video
          playsInline
          autoPlay
          loop
          muted
          uk-cover="true"
          style={{ minWidth: "100%", minHeight: "100%" }}
        >
          <source
            type="video/mp4"
            src={require("../../../src/videos/clouds.mp4")}
          />
          <source
            type="video/webm"
            src={require("../../../src/videos/clouds.webm")}
          />
        </video>
        <div className="overlay-desc hv-center">{pageContent}</div>
      </div>
    );
  }
}

VideoBackground.propTypes = {
  pageContent: propTypes.object.isRequired,
  loading: propTypes.bool.isRequired
};

export default VideoBackground;
