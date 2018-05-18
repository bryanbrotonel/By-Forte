import React, { Component } from "react";
import whiteForte from "./../../images/Mock Ups/By Forte - Mock Up (White).png";
import yellowForte from "./../../images/Mock Ups/By Forte - Mock Up (Yellow).png";
import ashMantra from "./../../images/Mock Ups/Mantra Forte - Mock Up (Ash).png";
import ncBlueMantra from "./../../images/Mock Ups/Mantra Forte - Mock Up (NC Blue).png";
import "./styles.css";

export class ShirtShop extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="row">
          <div className="shirt-wrapper col-sm">
            <div className="col">
              <div className="text-center">
              </div>
              <img
                className="front-image mx-auto d-block"
                src={whiteForte}
                alt="By Forte Tee - (White)"
              />
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                optio, maiores ratione provident tenetur ad et corrupti illo
                laboriosam quam rem quia soluta qui ex. Deserunt explicabo
                corrupti, fuga necessitatibus.
              </p>
            </div>
          </div>
          <div className="shirt-wrapper col-sm">
            <div className="col">
              <div className="text-center">
              </div>
              <img
                className="front-image mx-auto d-block"
                src={yellowForte}
                alt="By Forte Tee - (Yellow)"
              />
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                optio, maiores ratione provident tenetur ad et corrupti illo
                laboriosam quam rem quia soluta qui ex. Deserunt explicabo
                corrupti, fuga necessitatibus.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="shirt-wrapper col-sm">
            <div className="col">
              <div className="text-center">
              </div>
              <img
                className="front-image mx-auto d-block"
                src={ashMantra}
                alt="Mantra Tee - (Ash)"
              />
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                optio, maiores ratione provident tenetur ad et corrupti illo
                laboriosam quam rem quia soluta qui ex. Deserunt explicabo
                corrupti, fuga necessitatibus.
              </p>
            </div>
          </div>
          <div className="shirt-wrapper col-sm">
            <div className="col">
              <div className="text-center">
              </div>
              <img
                className="front-image mx-auto d-block"
                src={ncBlueMantra}
                alt="Mantra Tee - (North Carolina Blue)"
              />
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                optio, maiores ratione provident tenetur ad et corrupti illo
                laboriosam quam rem quia soluta qui ex. Deserunt explicabo
                corrupti, fuga necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
