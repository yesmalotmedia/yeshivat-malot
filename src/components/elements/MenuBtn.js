import React, { useContext } from "react";
import { AppContext } from "../../App";

const MenuBtn = ({ opacity }) => {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const style = {
    width: 40,
    height: 40,
    opacity,
  };
  return <img style={style} src="/menu.png" />;
};

export default MenuBtn;
