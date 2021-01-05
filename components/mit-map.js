import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import buildings from "../data/buildings";

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
        zoom: 15,
      });

      // for UX
      map.addControl(new mapboxgl.NavigationControl());
      map.scrollZoom.disable();

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      buildings.forEach((bldg) => {
        const coordinates = [bldg.long_wgs84, bldg.lat_wgs84];
        const description = bldg.name;

        // create a HTML element for each feature
        const el = document.createElement("div");
        el.className = "marker";
        el.id = `marker-${bldg.bldgnum}`;

        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(description)
          )
          .addTo(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={{ height: "60vh", transform: "scale(.75)" }}
    />
  );
};

export default MITMap;
