import React, { useState } from "react";

const dec2bin = (dec) => {
  const converted = (dec >>> 0).toString(2);
  return converted.length < 8
    ? "0".repeat(8 - converted.length) + converted
    : converted;
};

const Address = ({ hasError, idyll, updateProps, numbers, ...props }) => {
  // TODO: human-friendly IP should depend on state too
  const initialBinNumbers = numbers.map((n) => dec2bin(n));
  const [binNumbers, setBinNumbers] = useState(initialBinNumbers);
  const handleChange = (num, idx, e) => {
    console.log(num, idx, e);
    // setBinNumbers(binNumbers => ({}))
  };

  // helper function
  const updateBinNum = (idx, newVal) => {
    // setBinNumbers()
  };

  return (
    <div {...props} className="address_container">
      <div className="address">
        {numbers.map((n) => (
          <span key={n} className="number">
            {n}
          </span>
        ))}
      </div>
      <div className="binary_address">
        {binNumbers.map((num, idx) => (
          <div key={num} className="number_container">
            <span>{num}</span>
            <div className="binary_switches">
              {[...Array(7).keys()].map((k) => (
                <input
                  data-number={idx}
                  key={k}
                  type="checkbox"
                  className="binary_switch"
                  defaultChecked={binNumbers[idx][k].toString().charAt() == 1}
                  onChange={(e) => handleChange(num, idx, e)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
