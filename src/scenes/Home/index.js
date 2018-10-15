import React, { Component } from "react";

import { Link } from "react-router-dom";
import VideoBackground from "../../components/VideoBackgorund";

import { parseURL } from "../../helpers/baseHelper";
import loadBackgroundVideo from "../../helpers/contentfulHelper";

import "./styles.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      MP4video: "",
      WEBMvideo: ""
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;

    document.title = "By Forte";

    loadBackgroundVideo().then(response => {
      const fields = response.fields;

      self.setState({
        loading: false,
        MP4video: parseURL`${fields.mp4video}`,
        WEBMvideo: parseURL`${fields.webmvideo}`
      });
    });
  }

  render() {
    const { loading, MP4video, WEBMvideo } = this.state;

    const pageContent = (
      <div className="text-center text-white">
        <div>
          <h2 className="base-font font-weight-bold">Prosper Through Noise</h2>
          <Link to="/shop">
            <h6 className="mb-0">Shop FW 18 now</h6>
          </Link>
        </div>
      </div>
    );

    return (
      <VideoBackground
        loading={loading}
        pageContent={pageContent}
        MP4video={MP4video}
        WEBMvideo={WEBMvideo}
      />
    );
  }
}
