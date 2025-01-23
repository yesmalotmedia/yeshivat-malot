// import React, { useContext, useState } from "react";
// import { AppContext } from "../../../App";

// const SelectInput = ({ options, onChange, value }) => {
//   const [visibleChildren, setVisibleChildren] = useState("5"); // Track the visible children by parent ID

//   const { colors } = useContext(AppContext);

//   // styles
//   const styles = {
//     input: {
//       padding: "10px 12px",
//       borderRadius: 50,
//       cursor: "pointer",
//       width: "90%",
//       outline: "none",
//       border: "solid 1px" + colors.darkBlue,
//       fontSize: 17,
//       color: "grey",
//       fontWeight: 500,
//       marginBottom: 20,
//     },
//   };

//   // Generate the options for the select input
//   const optionsElements = options?.map((option) => (
//     <React.Fragment key={option.id}>
//       <option style={{ fontWeight: 600 }} value={option.name}>
//         {option.name}
//       </option>

//       {option.children?.map((child) => (
//         <option
//           key={child.id}
//           value={child.name}
//           style={{ paddingLeft: "10px" }}
//         >
//           &nbsp;&nbsp;{child.name}
//         </option>
//       ))}
//     </React.Fragment>
//   ));

//   return (
//     <select onChange={onChange} style={styles.input} value={value}>
//       {optionsElements}
//     </select>
//   );
// };

// export default SelectInput;

import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";

const SelectInput = ({ options, onChange, value }) => {
  const [visibleChildren, setVisibleChildren] = useState(null); // Track visible children by parent ID
  const { colors } = useContext(AppContext);

  // styles
  const styles = {
    input: {
      padding: "10px 12px",
      borderRadius: 50,
      cursor: "pointer",
      width: "90%",
      outline: "none",
      border: `solid 1px ${colors.darkBlue}`,
      fontSize: 17,
      color: "grey",
      fontWeight: 500,
      marginBottom: 20,
    },
  };

  // Recursive rendering of options with parent-child relationships
  const renderOptions = (options, level = 0) => {
    return options.map((option) => (
      <React.Fragment key={option.id}>
        <option
          style={{
            fontWeight: level === 0 ? 600 : 400,
            paddingLeft: `${level * 10}px`,
          }}
          value={option.name}
        >
          {"-".repeat(level)} {option.name}
        </option>
        {option.children && renderOptions(option.children, level + 1)}
      </React.Fragment>
    ));
  };

  return (
    <select onChange={onChange} style={styles.input} value={value}>
      <option value="">בחר אפשרות</option>
      {renderOptions(options || [])}
    </select>
  );
};

export default SelectInput;
