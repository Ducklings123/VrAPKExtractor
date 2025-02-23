import axios from 'axios';

const Api = {
  extractApk: (file) => {
    const formData = new FormData();
    formData.append('apk', file);
    return axios.post('/api/extract', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },

  recompileApk: (modifiedFile) => {
    const formData = new FormData();
    formData.append('apk', modifiedFile);
    return axios.post('/api/recompile', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
};

export default Api;
