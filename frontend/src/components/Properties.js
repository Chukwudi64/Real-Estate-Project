import React from "react";
import Bproperties from "./Bproperty";
import pimage1 from "../image/p11.jpg";
import pimage2 from "../image/p12.jpeg";
import pimage3 from "../image/p13.jpg";

function Properties() {
  return (
    <div className="product">
      <div className="p-heading">
        <h3> Properties</h3>
        <p>Some Glimpse of Properties </p>
      </div>

      <div className="product-container">
        <Bproperties image={pimage1} name="San" price="Rs 9,000,000" />
        <Bproperties image={pimage2} name=" vihan villa" price="11,100,000" />
        <Bproperties image={pimage3} name=" manhatten " price="20,000,000" />
      </div>
    </div>
  );
}

export default Properties;
