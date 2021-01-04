import React from "react";
import Scrabble from "./scrabble";

const CIDRExplorer = ({ prefix }) => {
  return (
    <div>
      <Scrabble networkSize={prefix} />
    </div>
  );
};

export default CIDRExplorer;
