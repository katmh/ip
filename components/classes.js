import React from "react";
import Scrabble from "./scrabble";
import data from "../data/classes";

const Classes = () => {
  return (
    <section
      style={{
        margin: "4rem auto",
        padding: "2rem",
      }}
      className="cyan_texture"
    >
      <h3>Classful Networking</h3>
      <p className="description">
        From 1981 to 1993, IP addresses were divided into five classes. Each
        began with different bits and could support different size networks.
      </p>
      {data.map((d) => {
        return (
          <div className="class_row" key={d.name}>
            <div className="class_info">
              <h4>Class {d.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: d.description }} />
            </div>
            <Scrabble leading={d.leading} networkSize={d.networkSize} />
          </div>
        );
      })}
    </section>
  );
};

export default Classes;
