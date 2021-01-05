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
              borderBottomColor: COLORS.leading,
            }}
          >
            <p className="bit">{bit}</p>
          </div>
        );
      })}
      <div className="scrabble_block_set_container">
        <div
          style={{
            position: "absolute",
            borderLeft: `2px solid ${
              leading.length > 0 ? COLORS.network : "transparent"
            }`,
            height: "4rem",
            marginTop: "-3rem",
          }}
        />
        {networkSizeNum > 0 ? (
          <p className="scrabble_label">
            Network
            <br />({networkSizeNum} bits)
          </p>
        ) : null}
        <div className="scrabble_block_set">
          {networkArray.map((i) => {
            return (
              <div
                key={`network-${i}`}
                className="scrabble_block"
                style={{
                  borderBottomColor: COLORS.network,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="scrabble_block_set_container">
        <div
          style={{
            position: "absolute",
            borderLeft: `2px solid ${COLORS.host}`,
            height: "4rem",
            marginTop: "-3rem",
          }}
        />
        <p className="scrabble_label" style={{ marginBottom: 0 }}>
          Host
          <br />({hostSize} bits)
        </p>
        <div className="scrabble_block_set">
          {hostArray.map((i) => {
            return (
              <div
                key={i}
                className="scrabble_block"
                style={{
                  borderBottomColor: COLORS.host,
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
