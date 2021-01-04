import React, { useState } from "react";
import { dec2binArray, bin2dec } from "./helpers";

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
          const num =
            numArr.slice(0, 4).join("") + " " + numArr.slice(4, 8).join("");
          return (
            <div key={binIdx} className="number_container">
              <span>{num}</span>

              <div className="binary_switches">
                {[...Array(8).keys()].map((checkIdx) => (
                  <label className="switch" key={checkIdx}>
                    <input
                      type="checkbox"
                      className="switch"
                      defaultChecked={
                        binNumbers[binIdx][checkIdx].toString().charAt() == 1
                      }
                      onChange={() => handleChange(binIdx, checkIdx)}
                    />
                    <span className="slider round"></span>
                  </label>
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
