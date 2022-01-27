import React, { Component } from "react";

import { Link } from "react-router-dom";
import VideoBackground from "../../components/VideoBackgorund";

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
    document.title = "By Forte";
  }

  render() {
    const { loading } = this.state;

    const pageContent = (
      <div className="text-center">
        <div>
          <h2 className="base-font font-weight-bold text-white">Prosper Through Noise</h2>
          <Link to="/shop">
            <h6 className="mb-0 text-white">Shop FW 18 now</h6>
          </Link>
        </div>
      </div>
    );

    return (
      <VideoBackground
        loading={loading}
        pageContent={pageContent}
      />
    );
  }
}
