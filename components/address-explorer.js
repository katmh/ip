import React, { useState } from "react";
import { dec2binArray, bin2dec } from "./helpers";

const Switch = ({ binNumbers, binIdx, checkIdx, handleChange, numbers }) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          className="switch"
          defaultChecked={binNumbers[binIdx][checkIdx].toString().charAt() == 1}
          onChange={() => handleChange(binIdx, checkIdx)}
        />
        <span className="slider round"></span>
      </label>
      <span className="power_of_two">
        2<sup>{7 - checkIdx}</sup>
        {checkIdx == 7 ? ` = ${bin2dec(binNumbers[binIdx].join(""))}` : " +"}
      </span>
    </div>
  );
};

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
        {binNumbers.map((numArr, binIdx) => (
          <div
            key={binIdx}
            style={{
              width: "50%",
              display: "inherit",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "1rem",
                marginTop: "2rem",
                marginBottom: "2rem",
                marginLeft: `${binIdx % 2 == 0 ? "auto" : "3rem"}`,
                marginRight: `${binIdx % 2 == 1 ? "auto" : "3rem"}`,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                {/* first four digits, aka first row of grid */}
                {numArr.slice(0, 4).map((num, i) => {
                  return <div key={i}>{num}</div>;
                })}
                {/* their switches, second row of grid */}
                {[...Array(4).keys()].map((checkIdx) => (
                  <Switch
                    key={checkIdx}
                    binNumbers={binNumbers}
                    binIdx={binIdx}
                    checkIdx={checkIdx}
                    handleChange={handleChange}
                    numbers={numbers}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                {/* second four digits, aka first row of grid */}
                {numArr.slice(4, 8).map((num, i) => {
                  return <div key={i}>{num}</div>;
                })}
                {/* their switches, second row of grid */}
                {[...Array(4).keys()].map((checkIdx) => (
                  <Switch
                    key={checkIdx + 4}
                    binNumbers={binNumbers}
                    binIdx={binIdx}
                    checkIdx={checkIdx + 4}
                    handleChange={handleChange}
                    numbers={numbers}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
