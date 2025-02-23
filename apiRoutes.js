const express = require('express');
const multer = require('multer');
const { extractApk, recompileApk } = require('./extractor');
const fileHandler = require('./fileHandler');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route to handle APK extraction
router.post('/extract', upload.single('apk'), (req, res) => {
  const apkPath = req.file.path;
  const extractDir = path.join(__dirname, 'extracted', req.file.filename);

  extractApk(apkPath, extractDir)
    .then(() => {
      const extractedFiles = fs.readdirSync(extractDir).map(file => ({
        name: file,
        path: path.join(extractDir, file)
      }));
      res.json({ files: extractedFiles });
    })
    .catch(error => res.status(500).send(error));
});

// Route to handle APK recompiling
router.post('/recompile', upload.single('apk'), (req, res) => {
  const modifiedDir = path.join(__dirname, 'modified', req.body.filename);
  const outputApkPath = path.join(__dirname, 'modified', `${req.body.filename}.apk`);

  recompileApk(modifiedDir, outputApkPath)
    .then(() => {
      res.download(outputApkPath);
    })
    .catch(error => res.status(500).send(error));
});

module.exports = router;
