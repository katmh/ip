import React, { useState } from "react";
import { dec2binArray, bin2dec } from "./helpers";
import Color from "./color";

const Bit = ({ bit, binNumbers, binIdx, checkIdx, handleChange, numbers }) => {
  return (
    <div>
      <div>{bit}</div>
      <label className="switch">
        <input
          type="checkbox"
          className="switch"
          defaultChecked={binNumbers[binIdx][checkIdx].toString().charAt() == 1}
          onChange={() => handleChange(binIdx, checkIdx)}
        />
        <span className="slider round"></span>
      </label>
      <span className="power_of_two math">
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
              {i == 0 || i == 1 ? (
                <Color color="#e53535">{decNum}</Color>
              ) : (
                <Color color="#4545ef">{decNum}</Color>
              )}
            </span>
          );
        })}
      </div>

      <div className="binary_address">
        {binNumbers.map((numArr, binIdx) => (
          <div
            key={binIdx}
            style={{
              width: "auto",
              display: "inherit",
              margin: "1rem auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "1rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                {/* first four digits, aka first row of grid */}
                {numArr.slice(0, 4).map((num, checkIdx) => {
                  return (
                    <Bit
                      key={checkIdx}
                      bit={num}
                      binNumbers={binNumbers}
                      binIdx={binIdx}
                      checkIdx={checkIdx}
                      handleChange={handleChange}
                      numbers={numbers}
                    />
                  );
                })}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                }}
              >
                {/* second four digits, aka first row of grid */}
                {numArr.slice(0, 4).map((num, checkIdx) => {
                  return (
                    <Bit
                      bit={num}
                      key={checkIdx + 4}
                      binNumbers={binNumbers}
                      binIdx={binIdx}
                      checkIdx={checkIdx + 4}
                      handleChange={handleChange}
                      numbers={numbers}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
