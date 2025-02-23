import React from 'react';

const FileUpload = ({ onFileExtract }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileExtract(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
