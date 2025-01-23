import React, { useState } from "react";
import { sectionAzure, sectionCream } from "../styles/sectionsStyle"; // Importing the style patterns
import bgColors from "../styles/bg-colors"; // Importing background colors

const VideoUploader = ({ theme }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement upload logic here
    if (selectedFile) {
      // Example: send selectedFile to a server using fetch or axios
    } else {
    }
  };

  // Applying theme styles based on the provided theme prop
  const sectionStyle = theme === "azure" ? sectionAzure : sectionCream;

  return (
    <div style={{ ...sectionStyle }}>
      <h2>Upload Video</h2>
      <form>
        <div>
          <label htmlFor="videoFile">Select Video File:</label>
          <input
            type="file"
            id="videoFile"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default VideoUploader;
