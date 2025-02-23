import React, { useState } from 'react';
import FileUpload from './FileUpload';
import AssetEditor from './AssetEditor';
import Api from './utils/Api';
import './App.css';

const App = () => {
  const [extractedFiles, setExtractedFiles] = useState([]);
  const [status, setStatus] = useState('');

  // Function to extract APK
  const handleExtract = async (file) => {
    setStatus('Extracting APK...');
    try {
      const response = await Api.extractApk(file);
      setExtractedFiles(response.data.files);
      setStatus('Extraction Complete');
    } catch (error) {
      setStatus('Extraction Failed');
    }
  };

  return (
    <div className="App">
      <h1>APK Asset Editor</h1>
      <FileUpload onFileExtract={handleExtract} />
      <p>{status}</p>

      <AssetEditor files={extractedFiles} />
    </div>
  );
};

export default App;
