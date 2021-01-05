import React from "react";

const Color = ({ children, color }) => {
  return (
    <span style={{ color: color, fontWeight: "bold" }}>{String(children)}</span>
  );
};

export default Color;
