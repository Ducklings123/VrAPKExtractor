const fs = require('fs');
const path = require('path');

// Helper to move or delete files, etc.
const moveFile = (source, destination) => {
  fs.renameSync(source, destination);
};

module.exports = { moveFile };
