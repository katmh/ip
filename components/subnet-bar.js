import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import subnets from "../data/mit-subnets";

const SubnetBar = ({ setBldg, ...props }) => {
  const d3Container = useRef(null);

  // list of numbers in 18.18.xx.0
  props.data = subnets;
  const barWidth = 4;
  const width = Math.max(...subnets.map((arr) => arr[1])) * barWidth + barWidth;

  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // bind D3 data
      const update = svg.append("g").selectAll("rect").data(props.data);

      // enter new D3 elements
      update
        .enter()
        .append("rect")
        .attr("height", 30)
        .attr("width", barWidth)
        .attr("x", (d) => d[1] * barWidth)
        .attr("fill", "navy")
        .attr("class", "subnet");

      // update existing D3 elements
      update.attr("x", (_, i) => i * 40).text((d) => d);

      // remove old D3 elements
      update.exit().remove();

      d3.selectAll("rect").on("mouseover", (d) => {
        d3.event.target.style.fill = "cyan";
        const el = document.getElementById(`marker-${d[0]}`);
        if (el) {
          // optional chaining doesn't seem to work
          el.style.background = "cyan";
        }
        setBldg(d); // ["W2", 16]
        //document.getElementById("overlay").innerHTML = d;
      });
      d3.selectAll("rect").on("mouseout", (d) => {
        d3.event.target.style.fill = "navy";
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
        height={40}
        preserveAspectRatio="xMidYMid meet"
        ref={d3Container}
        style={{
          background: "#eee",
        }}
      />
    </div>
  );
};

export default SubnetBar;
