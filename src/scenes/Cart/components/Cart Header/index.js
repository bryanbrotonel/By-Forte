import React, { Component } from "react";

export class CartHeader extends Component {

  render() {
    return (
      <React.Fragment>
        <br/>
        <div className="row text-muted">
          <div className="col-9 d-none d-md-block">
            <div className="row">
              <div className="col-12">
                <h6>ITEM</h6>
              </div>
            </div>
          </div>
          <div className="col-3 text-center d-none d-md-block">
            <div className="row">
              <div className="col ml-auto">
                <h6>QUANTITY</h6>
              </div>
              <div className="col">
                <h6>PRICE</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
