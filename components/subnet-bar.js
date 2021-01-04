import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import subnets from "../data/mit-subnets";

const SubnetBar = ({ ...props }) => {
  const d3Container = useRef(null);

  // list of numbers in 18.18.xx.0
  props.data = subnets;

  const width = Math.max(...subnets.map((arr) => arr[1])) * 16 + 16;

  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // bind D3 data
      const update = svg.append("g").selectAll("rect").data(props.data);

      // enter new D3 elements
      update
        .enter()
        .append("rect")
        .attr("height", 20)
        .attr("width", 16)
        .attr("x", (d) => d[1] * 16)
        .attr("fill", "blue")
        .attr("class", "subnet");

      // update existing D3 elements
      update.attr("x", (_, i) => i * 40).text((d) => d);

      // remove old D3 elements
      update.exit().remove();

      d3.selectAll("rect").on("mouseover", (d) => {
        const el = document.getElementById(`marker-${d[0]}`);
        if (el) {
          // optional chaining doesn't seem to work
          el.style.background = "cyan";
        }
      });
      d3.selectAll("rect").on("mouseout", (d) => {
        const el = document.getElementById(`marker-${d[0]}`);
        if (el) {
          // optional chaining doesn't seem to work
          el.style.background = "navy";
        }
      });
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
        width={width}
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
