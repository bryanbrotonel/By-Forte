import React, { Component } from "react";

import VideoBackground from "../../components/VideoBackgorund"

import { parseURL } from "../../helpers/baseHelper";
import loadBackgroundVideo from "../../helpers/contentfulHelper";

import "./styles.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      MP4video: "",
      OGVvideo: ""
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
        OGVvideo: parseURL`${fields.ogvvideo}`
      });
    });
  }

  render() {
    const { loading, MP4video, OGVvideo } = this.state;
    return (
      <VideoBackground
        loading={loading}
        MP4video={MP4video}
        OGVvideo={OGVvideo}
      />
    );
  }
}
