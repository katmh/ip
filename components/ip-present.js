import React from "react";
import MapContainer from "./map-container";

const IPPresent = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#222",
      }}
    >
      <p className="description">Hello</p>
      <MapContainer />
    </section>
  );
};

export default IPPresent;
