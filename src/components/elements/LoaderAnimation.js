import React from "react";
import { PuffLoader } from "react-spinners";

const LoaderAnimation = ({ selectedTopic, isLoading, color }) => {
  const styles = {
    loader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      margin: "20px auto",
    },
  };

  return (
    isLoading && (
      <div style={styles.loader}>
        <PuffLoader size={60} color={"darkBlue"} loading={isLoading} />
      </div>
    )
  );
};

export default LoaderAnimation;
