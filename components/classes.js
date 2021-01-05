import React from "react";
import Scrabble from "./scrabble";

const Classes = () => {
  return (
    <section
      style={{
        margin: "4rem auto",
      }}
    >
      <div className="class_row">
        <div className="class_info">
          <h4>Class A</h4>
          <p>
            Many organizations needed more IPs than Class C could provide, but
            didn’t use nearly as many as Class B offered.
          </p>
        </div>
        <Scrabble leading={[0]} networkSize={7} />
      </div>

      <div className="class_row">
        <div className="class_info">
          <h4>Class B</h4>
          <p>
            Many organizations needed more IPs than Class C could provide, but
            didn’t use nearly as many as Class B offered.
          </p>
        </div>
        <Scrabble leading={[1, 0]} networkSize={14} />
      </div>

      <div className="class_row">
        <div className="class_info">
          <h4>Class C</h4>
          <p>
            Many organizations needed more IPs than Class C could provide, but
            didn’t use nearly as many as Class B offered.
          </p>
        </div>
        <Scrabble leading={[1, 1, 0]} networkSize={21} />
      </div>

      <div className="class_row">
        <div className="class_info">
          <h4>Class D</h4>
          <p>
            Many organizations needed more IPs than Class C could provide, but
            didn’t use nearly as many as Class B offered.
          </p>
        </div>
        <Scrabble leading={[1, 1, 1, 0]} networkSize={0} />
      </div>

      <div className="class_row">
        <div className="class_info">
          <h4>Class E</h4>
          <p>
            Many organizations needed more IPs than Class C could provide, but
            didn’t use nearly as many as Class B offered.
          </p>
        </div>
        <Scrabble leading={[1, 1, 1, 1]} networkSize={0} />
      </div>
    </section>
  );
};

export default Classes;
