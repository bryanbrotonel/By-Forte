import React from "react";
import propTypes from "prop-types";

import loadBackgroundVideo from "../../helpers/contentfulHelper";

import "./styles.css";

class VideoBackground extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      mp4video: "",
      ogvvideo: ""
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.parseURL = this.parseURL.bind(this);
  }

  componentDidMount() {
    const self = this;

    loadBackgroundVideo().then(response => {
      const fields = response.fields;

      self.setState({
        loading: false,
        mp4video: this.parseURL`${fields.mp4video}`,
        ogvvideo: this.parseURL`${fields.ogvvideo}`
      });
    });
  }

  // Parses string from contentful videobackground content
  parseURL(str, title) {
    return `https:${str[0]}${title.fields.file.url}`;
  }

  render() {
    const { loading, mp4video, ogvvideo } = this.state;

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
          <source src={ogvvideo} type="video/ogg" />
          <source src={mp4video} type="video/mp4" />
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
  MP4video: propTypes.string.isRequired
};

export default VideoBackground;
