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
  leading = [], // e.g. [1,1,0]
  networkSize, // e.g. 24
  ...props
}) => {
  const networkSizeNum = Number(networkSize);
  const hostSize = 32 - leading.length - networkSizeNum;
  const networkArray = [...Array(networkSizeNum).keys()];
  const hostArray = [...Array(hostSize).keys()];
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
        <p className="scrabble_label">Network ({networkSizeNum} bits)</p>
        <div className="scrabble_block_set">
          {networkArray.map((i) => {
            return (
              <div
                key={`network-${i}`}
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
        <p className="scrabble_label" style={{ marginBottom: 0 }}>
          Host ({hostSize} bits)
        </p>
        <div className="scrabble_block_set">
          {hostArray.map((i) => {
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
