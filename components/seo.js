import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
