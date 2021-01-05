import React from "react";
import Scrabble from "./scrabble";

const Classes = () => {
  return (
    <section
      style={{
        margin: "6rem auto 1rem",
      }}
    >
      <Scrabble leading={[0]} networkSize={7} />
      <Scrabble leading={[1, 0]} networkSize={14} />
      <Scrabble leading={[1, 1, 0]} networkSize={21} />
      <Scrabble leading={[1, 1, 1, 0]} networkSize={0} />
      <Scrabble leading={[1, 1, 1, 1]} networkSize={0} />
    </section>
  );
};

export default Classes;
