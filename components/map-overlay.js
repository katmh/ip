import React from "react";

const Overlay = ({ name, bldgnum, ip }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        background: "rgba(255,255,255,.75)",
        padding: ".5rem",
        margin: "1rem 0 0 1rem",
      }}
    >
      <b>
        {name} ({bldgnum})
      </b>
      , 18.18.{ip}.0
    </div>
  );
};

export default Overlay;
