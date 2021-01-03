import React, { useState } from "react";

// use array to store bits to make it easier to access by index
const dec2binArray = (dec) => {
  const converted = (dec >>> 0).toString(2);
  // add extra 0s to front if shorter than 8 bits
  return converted.length < 8
    ? ("0".repeat(8 - converted.length) + converted).split("")
    : converted.split("");
};
const bin2dec = (bin) => parseInt(bin, 2);

const Address = ({ hasError, idyll, updateProps, numbers, ...props }) => {
  // decimal, human-friendly numbers are passed in as numbers prop
  const initialBinNumbers = numbers.map((n) => dec2binArray(n));
  const [binNumbers, setBinNumbers] = useState(initialBinNumbers);

  const handleChange = (binIdx, checkIdx) => {
    const bn = binNumbers.slice();
    bn[binIdx][checkIdx] = (1 - bn[binIdx][checkIdx]).toString();
    setBinNumbers(bn);
  };

  return (
    <div {...props} className="address_container">
      <div className="address">
        {binNumbers.map((binNum, i) => {
          const decNum = bin2dec(binNum.join(""));
          return (
            <span key={i} className="number">
              {decNum}
            </span>
          );
        })}
      </div>

      <div className="binary_address">
        {binNumbers.map((numArr, binIdx) => {
          const num = numArr.join("");
          return (
            <div key={binIdx} className="number_container">
              <span>{num}</span>

              <div className="binary_switches">
                {[...Array(8).keys()].map((checkIdx) => (
                  <input
                    key={checkIdx}
                    type="checkbox"
                    className="binary_switch"
                    defaultChecked={
                      binNumbers[binIdx][checkIdx].toString().charAt() == 1
                    }
                    onChange={() => handleChange(binIdx, checkIdx)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
