import React from "react";
import propTypes from "prop-types";

import { Link } from "react-router-dom";

import "./styles.css";

class VideoBackground extends React.Component {
  render() {
    const { loading, MP4video, WEBMvideo } = this.props;

    console.log(this.props);

    const pageContent = (
      <div>
        <h2 className="base-font font-weight-bold">Prosper Through Noise</h2>
        <Link to="/shop">
          <h6 className="mb-0">Shop FW 18 now</h6>
        </Link>
      </div>
    );

    return loading ? (
      <div
        className="hv-center text-white"
        style={{ backgroundColor: "black" }}
      >
        {pageContent}
      </div>
    ) : (
      <div
        className="uk-cover-container hv-center"
        style={{ backgroundColor: "black" }}
      >
        <video
          playsInline
          autoPlay
          loop
          muted
          uk-cover="true"
          style={{ minWidth: "100%", minHeight: "100%" }}
        >
          <source type="video/mp4" src={MP4video} />
          <source type="video/webm" src={WEBMvideo} />
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
  WEBMvideo: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired
};

export default VideoBackground;
