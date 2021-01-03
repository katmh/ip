import React from "react";
import { dec2binArray } from "./helpers";

const AddressWithBinary = ({ numbers }) => {
  const binNumbers = numbers.map((n) => dec2binArray(n));
  return (
    <div className="address_container">
      <div className="address">
        {numbers.map((num, i) => (
          <span key={i}>{num}</span>
        ))}
      </div>
      <div className="binary_address">
        {binNumbers.map((arr, i) => (
          <span key={i}>{arr}</span>
        ))}
      </div>
    </div>
  );
};

export default AddressWithBinary;
