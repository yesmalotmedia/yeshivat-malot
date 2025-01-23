import React from "react";

const Spacer = ({ height }) => {
  const style = {
    height,
    width: "100%",
  };
  return <div style={style}></div>;
};

export default Spacer;
