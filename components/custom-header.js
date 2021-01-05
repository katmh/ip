import React from "react";

const CustomHeader = () => {
  return (
    <header>
      <h1>What's an IP address?</h1>
      <h1 className="outline">How are they allocated?</h1>
      <h1>Are we running out?</h1>
      <p className="byline">
        By <a href="https://katmh.com/">Kat Huang</a>, <i>January 2021</i>
      </p>
    </header>
  );
};

export default CustomHeader;
