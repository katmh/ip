import React from "react";

const Code = ({ children }) => {
  return (
    <span>
      <pre className="inline_code">{String(children)}</pre>
    </span>
  );
};

export default Code;
