import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import buildings from "../data/buildings";
import SubnetBar from "./subnet-bar";

const MITMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2F0bWgiLCJhIjoiY2tqaHIwc2g3NG83bjJ5c2I0MzM2cmdpeiJ9.YcnjXWaMrP_-eSnElPXZJA";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-71.092, 42.36],
        zoom: 14,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      buildings.forEach((bldg) => {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";
        new mapboxgl.Marker(el)
          .setLngLat([bldg.long_wgs84, bldg.lat_wgs84])
          .addTo(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      style={{
        padding: "0 5%",
      }}
    >
      <div
        ref={(el) => (mapContainer.current = el)}
        style={{ height: "60vh", width: "100%" }}
      />
      <SubnetBar />
    </div>
  );
};

export default MITMap;
