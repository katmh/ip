import React, { useState } from "react";
import Scrabble from "./scrabble";

const CIDRExplorer = () => {
  const [prefix, setPrefix] = useState(7);
  return (
    <div>
      <Scrabble networkSize={prefix} />
    </div>
  );
};

export default CIDRExplorer;
