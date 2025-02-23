import React from 'react';
import TextureEditor from './TextureEditor';

const AssetEditor = ({ files }) => {
  return (
    <div>
      <h2>Extracted Files</h2>
      {files.length === 0 ? (
        <p>No files to edit</p>
      ) : (
        files.map((file, index) => (
          <div key={index}>
            <h3>{file.name}</h3>
            {/* Here you can customize asset editing further */}
            <TextureEditor assetFile={file} />
          </div>
        ))
      )}
    </div>
  );
};

export default AssetEditor;
