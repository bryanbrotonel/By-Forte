import React, { Component } from "react";

import "./styles.css";

export class PictureRow extends Component {
  render() {
    return (
      <div className="mx-auto">
        <div className="d-flex flex-column flex-md-row">
          <div
            className="picture"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/aGn1w5kPRps/300x300&fm=webp&auto=compress&lossless=true)"
            }}
          />
          <div
            className="picture"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/k4ozvu8gTX8/300x300&fm=webp&auto=compress&lossless=true)"
            }}
          />
          <div
            className="picture"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/LOg6ZdaepTU/300x300&fm=webp&auto=compress&lossless=true)"
            }}
          />
        </div>
      </div>
    );
  }
}
