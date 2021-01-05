import Latex from "react-latex";
import React from "react";

const LatexWrapper = ({ children }) => {
  return <Latex>{String(children)}</Latex>;
};

export default LatexWrapper;
