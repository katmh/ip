import React, { useState } from "react";
import Scrabble from "./scrabble";

const CIDRExplorer = () => {
  const [prefix, setPrefix] = useState(12);
  const handleChange = (e) => {
    setPrefix(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        className="address"
        style={{ width: "100%", textAlign: "center", marginBottom: "5rem" }}
      >
        <span className="number">18</span>
        <span className="number">31</span>
        <span className="number">255</span>
        <span className="number">255</span>
        /
        <input
          type="number"
          min="8"
          max="30"
          value={prefix}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Scrabble networkSize={prefix} />
    </div>
  );
};

export default CIDRExplorer;
