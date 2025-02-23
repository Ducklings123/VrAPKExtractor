const express = require('express');
const multer = require('multer');
const path = require('path');
const { extractApk, recompileApk } = require('./extractor');
const fileHandler = require('./fileHandler');
const apiRoutes = require('./apiRoutes');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Setup API routes
app.use('/api', apiRoutes);

// Server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
