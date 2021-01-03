import React from "react";

const COLORS = {
  leading: "#222",
  network: "maroon",
  host: "navy",
};

const Scrabble = ({
  hasError,
  idyll,
  updateProps,
  leading, // [1,1,0]
  networkSize, // 24
  ...props
}) => {
  const hostSize = 32 - leading.length - networkSize;
  return (
    <div {...props} className="scrabble">
      {leading.map((bit, i) => {
        return (
          <div
            key={i}
            className="scrabble_block"
            style={{
              borderBottom: `2px solid ${COLORS.leading}`,
            }}
          >
            <p className="bit">{bit}</p>
          </div>
        );
      })}
      <div className="scrabble_block_set_container">
        <p className="scrabble_label">Network ({networkSize} bits)</p>
        <div className="scrabble_block_set">
          {[...Array(networkSize).keys()].map((i) => {
            return (
              <div
                key={i}
                className="scrabble_block"
                style={{
                  borderBottom: `2px solid ${COLORS.network}`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="scrabble_block_set_container">
        <p className="scrabble_label">Host ({hostSize} bits)</p>
        <div className="scrabble_block_set">
          {[...Array(hostSize).keys()].map((i) => {
            return (
              <div
                key={i}
                className="scrabble_block"
                style={{
                  borderBottom: `2px solid ${COLORS.host}`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Scrabble;
