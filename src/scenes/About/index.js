import React, { Component } from "react";

import "./styles.css";

export default class About extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | About";
  }

  render() {
    return (
      <div className="container hv-center">
        <div className="row justify-content-around">
          <div className="col-10 col-md-6">
            <img
              loading="lazy"
              src="https://source.unsplash.com/rc3So-nVtsw/1600x1024"
              alt="By Forte About"
            />
          </div>
          <div className="col-10 col-md-5 hv-center">
            <div className="about-write-up">
              <p>By Forte is a streetwear brand based in Vancouver, Canada.</p>
              <p>
                We represent what it means to bring the ideas that we visualize
                in our minds to life. By Forte embraces the creative process by
                creating in silence and let our products speak for themselves.
              </p>
              <p>Prosper Through Noise</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
