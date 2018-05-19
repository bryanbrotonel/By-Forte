import React, { Component } from "react";
import { ProductItem } from "./../Product Item";

import whiteForte from "./../../images/Mock Ups/By Forte - Mock Up (White).png";
import yellowForte from "./../../images/Mock Ups/By Forte - Mock Up (Yellow).png";
// import ashMantraFront from './../../images/Mock Ups/Mantra Forte (Front) - Mock Up (Ash).png';
import ashMantraBack from "./../../images/Mock Ups/Mantra Forte (Back) - Mock Up (Ash).png";
// import ncBlueMantraFront from './../../images/Mock Ups/Mantra Forte (Front) - Mock Up (NC Blue).png';
import ncBlueMantraBack from "./../../images/Mock Ups/Mantra Forte (Back) - Mock Up (NC Blue).png";
import "./styles.css";

export class ProductShop extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="row justify-content-between text-center">
          <ProductItem name="BY FORTE TEE" colour="WHITE" image={whiteForte} />
          <ProductItem name="BY FORTE TEE" colour="YELLOW" image={yellowForte} />
          <ProductItem
            name="MANTRA FORTE TEE"
            colour="NORTH CAROLINA BLUE"
            image={ncBlueMantraBack}
          />
          <ProductItem
            name="MANTRA FORTE TEE"
            colour="GREY"
            image={ashMantraBack}
          />
        </div>
      </div>
    );
  }
}
