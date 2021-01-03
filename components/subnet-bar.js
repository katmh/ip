import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import subnets from "../data/mit-subnets";

const SubnetBar = ({ ...props }) => {
  const d3Container = useRef(null);
  props.data = subnets.map((d) => d[1]).sort((a, b) => a - b);

  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      // Bind D3 data
      const update = svg.append("g").selectAll("text").data(props.data);

      // Enter new D3 elements
      update
        .enter()
        .append("rect")
        .attr("height", 20)
        .attr("width", 16)
        .attr("x", (d) => d * 16)
        .attr("fill", "blue")
        .attr("class", "subnet");

      // Update existing D3 elements
      update.attr("x", (_, i) => i * 40).text((d) => d);
      // Remove old D3 elements
      update.exit().remove();
    }
  }, [props.data, d3Container.current]);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "scroll",
      }}
    >
      <svg
        className="d3-component"
        width={Math.max(...props.data) * 16 + 16 + "px"}
        height={30}
        preserveAspectRatio="xMidYMid meet"
        ref={d3Container}
        style={{
          border: "1px solid red",
        }}
      />
    </div>
  );
};

export default SubnetBar;
