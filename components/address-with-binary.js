import React from "react";
import { dec2binArray } from "./helpers";

const AddressWithBinary = ({ numbers }) => {
  const binNumbers = numbers.map((n) => dec2binArray(n));
  return (
    <div>
      <p>{numbers}</p>
      {binNumbers.map((arr, i) => (
        <span key={i}>{arr}</span>
      ))}
    </div>
  );
};

export default AddressWithBinary;
