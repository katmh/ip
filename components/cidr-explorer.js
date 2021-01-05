import React, { useState } from "react";
import Scrabble from "./scrabble";
import Code from "./code";

const CIDRExplorer = () => {
  const [prefix, setPrefix] = useState(12);
  const handleChange = (e) => {
    setPrefix(e.target.value);
  };
  return (
    <div
      className="cyan_texture"
      style={{
        textAlign: "center",
        padding: "1rem 5% 2rem",
        marginBottom: "4rem",
      }}
    >
      <h3>Classless Inter-Domain Routing (CIDR)</h3>
      <p className="description">
        In CIDR notation, IP addresses are followed by a slash and a number,
        which tells you how many bits at the beginning represent the network.
        The largest blocks of IPs given to organizations are <Code>/8</Code>{" "}
        (“slash eight”). The first 8 bits represent the network, leaving 24 bits
        for the host. 2<sup>24</sup> means over 16 million hosts.
      </p>
      <div style={{ display: "flex" }}>
        <div
          className="address cidr"
          style={{ width: "100%", textAlign: "center", marginBottom: "1rem" }}
        >
          <span className="number">18</span>
          <span className="number">31</span>
          <span className="number">255</span>
          <span className="number">255</span>
          /
          <input
            type="number"
            min="8"
            max="30"
            value={prefix}
            onChange={(e) => handleChange(e)}
            style={{
              marginLeft: ".25rem",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid #aaa",
              outline: "none",
            }}
          />
        </div>
      </div>

      <Scrabble networkSize={prefix} />
    </div>
  );
};

export default CIDRExplorer;
