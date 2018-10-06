import React, { Component } from "react";

export class CartHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="row text-dark">
          <div className="col-6 d-none d-md-block">
            <div className="row">
              <div className="col-12">
                <h6>Item</h6>
              </div>
            </div>
          </div>
          <div className="col-6 text-center d-none d-md-block">
            <div className="row">
              <div className="col-5">
                <h6>Quantity</h6>
              </div>
              <div className="col-5">
                <h6>Price</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
