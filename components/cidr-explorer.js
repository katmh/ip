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
        justifyContent: "center",
      }}
    >
      <Scrabble networkSize={prefix} />
      <input
        type="number"
        min="8"
        max="30"
        value={prefix}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default CIDRExplorer;
