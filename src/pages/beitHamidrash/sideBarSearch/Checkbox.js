import React, { useContext } from "react";
import { AppContext } from "../../../App";

const Checkbox = ({ label, checked, onChange }) => {
  // data
  const { colors } = useContext(AppContext);

  // styles
  const styles = {
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      color: colors.darkBlue,
      fontSize: 15,
      fontWeight: 500,
    },
    input: {
      marginLeft: 7,
    },

    label: {
      marginLeft: "auto",
      width: "100%",
      marginRight: 10,
    },
  };

  // functions
  const handleChange = (event) => {
    // onChange(event.target.checked);
    console.log("f");
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        <input
          style={styles.input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
