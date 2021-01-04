import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
      />
    </Helmet>
  );
};

export default SEO;
