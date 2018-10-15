import React from "react";
import propTypes from "prop-types";

import "./styles.css";

class VideoBackground extends React.Component {

  render() {
    const { loading, MP4video, OGVvideo } = this.props;

    return loading ? (
      <div className="hv-center text-white">
        <h2 className="base-font font-weight-bold mb-0">
          Propser Through Noise
        </h2>
      </div>
    ) : (
      <div
        className="uk-cover-container hv-center"
        style={{ backgroundColor: "black" }}
      >
        <video autoPlay loop muted uk-cover="true">
          <source src={OGVvideo} type="video/ogg" />
          <source src={MP4video} type="video/mp4" />
          Prosper Thorugh Noise
        </video>
        <div className="overlay-desc hv-center text-white">
          <h2 className="base-font font-weight-bold mb-0">
            Propser Through Noise
          </h2>
        </div>
      </div>
    );
  }
}

VideoBackground.propTypes = {
  MP4video: propTypes.string.isRequired,
  OGVvideo: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired
};

export default VideoBackground;
