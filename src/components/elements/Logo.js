import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ style }) => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate("/")}
      style={style}
      src="/main-logo.png"
      alt="logo"
    />
  );
};

export default Logo;
