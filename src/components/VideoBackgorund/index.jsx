import React from "react";
import propTypes from "prop-types";

import "./styles.css";

class VideoBackground extends React.Component {
  render() {
    const { loading, pageContent, MP4video, WEBMvideo } = this.props;

    const divStyle = { backgroundColor: "black" };

    return loading ? (
      <div className="hv-center" style={divStyle}>
        {pageContent}
      </div>
    ) : (
      <div className="uk-cover-container" style={divStyle}>
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
        <div className="overlay-desc hv-center">{pageContent}</div>
      </div>
    );
  }
}

VideoBackground.propTypes = {
  MP4video: propTypes.string.isRequired,
  WEBMvideo: propTypes.string.isRequired,
  pageContent: propTypes.object.isRequired,
  loading: propTypes.bool.isRequired
};

export default VideoBackground;
