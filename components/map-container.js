import React, { useState } from "react";
import MITMap from "./mit-map";
import SubnetBar from "./subnet-bar";
import Overlay from "./map-overlay";
// import buildings from "../data/buildings";

const MapContainer = () => {
  // console.log(buildings.filter((bldg) => bldg.bldgnum == "W2"));
  const [bldg, setBldg] = useState(null); // e.g. ["12", 19]
  return (
    <div
      style={{
        padding: "0 5%",
      }}
    >
      <Overlay bldg={bldg} name="tmp" bldgnum="tmp" ip="11" />
      <MITMap />
      <SubnetBar setBldg={setBldg} />
    </div>
  );
};

export default MapContainer;
