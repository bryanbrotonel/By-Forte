import React from "react";
import propTypes from "prop-types";

import { Link } from "react-router-dom";

import "./styles.css";

class VideoBackground extends React.Component {
  render() {
    const { loading, MP4video, OGVvideo } = this.props;

    const pageContent = (
      <div>
        <h2 className="base-font font-weight-bold">Propser Through Noise</h2>
        <Link to="/shop">
          <h6 className="mb-0">Shop FW 18 now</h6>
        </Link>
      </div>
    );

    return loading ? (
      <div className="hv-center text-white">{pageContent}</div>
    ) : (
      <div
        className="uk-cover-container hv-center"
        style={{ backgroundColor: "black" }}
      >
        <video playsInline autoPlay loop muted uk-cover="true">
          <source src={OGVvideo} type="video/ogg" />
          <source src={MP4video} type="video/mp4" />
          Prosper Thorugh Noise
        </video>
        <div className="overlay-desc hv-center text-center text-white">
          {pageContent}
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
