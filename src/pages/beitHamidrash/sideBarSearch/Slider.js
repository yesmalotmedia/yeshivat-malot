import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";

const Slider = ({ min, max, step, onChange }) => {
  // data
  const [value, setValue] = useState(min);
  const { colors, bgColors, isMobile } = useContext(AppContext);
  // styles
  const styles = {
    container: {
      width: "100%",
    },
    input: {
      width: "100%",
    },
    valueStyle: {
      color: colors.grey,
    },
  };

  // functions
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        style={styles.input}
      />
      <div style={styles.valueStyle}> עד {value} דקות</div>
      <br />
      <span className="value"></span>
    </div>
  );
};

export default Slider;
