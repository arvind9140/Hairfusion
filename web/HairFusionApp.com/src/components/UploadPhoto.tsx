import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ImageIcon from "@mui/material/Icon";

const UploadPhoto: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <Box textAlign="center">
      <Box
        p={2}
        border={1}
        borderRadius="50%"
        width={200}
        height={200}
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        ) : (
          <ImageIcon style={{ fontSize: 100, color: "#ccc" }} />
        )}
      </Box>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-photo"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-photo">
        <Button
          variant="contained"
          color="primary"
          component="span"
          style={{ marginTop: 10 }}
        >
          Upload Photo
        </Button>
      </label>
    </Box>
  );
};

export default UploadPhoto;
