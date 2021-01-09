import React, { useState } from "react";
import { dec2binArray, bin2dec } from "./helpers";
import Color from "./color";

const red = "#e53535";
const blue = "#4545ef";

const Bit = ({ binNumbers, binIdx, checkIdx, handleChange }) => {
  const sum = bin2dec(binNumbers[binIdx].join(""));
  const bit = binNumbers[binIdx][checkIdx].toString().charAt();
  return (
    <div
      style={{
        marginRight: `${checkIdx == 3 ? 1 : 0}rem`,
      }}
    >
      <span
        style={{
          display: "block",
        }}
      >
        <Color color={binIdx < 2 ? red : blue}>{bit}</Color>
      </span>
      <label className="switch">
        <input
          type="checkbox"
          className="switch"
          defaultChecked={bit == 1}
          onChange={() => handleChange(binIdx, checkIdx)}
        />
        <span className="slider round"></span>
      </label>
      <span className="power_of_two math">
        2<sup>{7 - checkIdx}</sup>
        {checkIdx == 7 ? ` = ${sum}` : " +"}
      </span>
    </div>
  );
};

const Byte = ({ binIdx, numArr, binNumbers, handleChange }) => {
  return (
    <div
      style={{
        width: "auto",
        display: "inherit",
        margin: "1rem auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // centering workaround
          gridGap: "1rem",
        }}
      >
        <div></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
          }}
        >
          {numArr.slice(0, 8).map((_, checkIdx) => {
            return (
              <Bit
                key={checkIdx}
                binNumbers={binNumbers}
                binIdx={binIdx}
                checkIdx={checkIdx}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Address = ({ numbers }) => {
  // decimal, human-friendly numbers are passed in as numbers prop
  const initialBinNumbers = numbers.map((n) => dec2binArray(n));
  // [[1,1,0,0,0,0,0,0], [1,0,1,0,1,0,0,0], [], []]
  const [binNumbers, setBinNumbers] = useState(initialBinNumbers);

  const handleChange = (binIdx, checkIdx) => {
    const bn = binNumbers.slice();
    bn[binIdx][checkIdx] = (1 - bn[binIdx][checkIdx]).toString();
    setBinNumbers(bn);
  };

  return (
    <div className="address_container">
      <div className="address">
        {binNumbers.map((binNum, i) => {
          const decNum = bin2dec(binNum.join(""));
          return (
            <span key={i} className="number">
              {i == 0 || i == 1 ? (
                <Color color={red}>{decNum}</Color>
              ) : (
                <Color color={blue}>{decNum}</Color>
              )}
            </span>
          );
        })}
      </div>

      <div className="binary_address">
        {binNumbers.map((numArr, binIdx) => (
          <Byte
            key={binIdx}
            binIdx={binIdx}
            numArr={numArr}
            binNumbers={binNumbers}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Address;
