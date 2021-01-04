import React from "react";

const IPSpace = () => {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "scroll",
      }}
    >
      <svg
        width={500}
        height={500}
        preserveAspectRatio="xMidYMid meet"
        style={{
          background: "#eee",
        }}
      >
        <rect
          width="500"
          height="500"
          style={{
            fill: "rgb(0,0,255)",
            strokeWidth: "3",
            stroke: "rgb(0,0,0)",
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
      </svg>
    </div>
  );
};

export default IPSpace;
