const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to extract APK using APKTool
const extractApk = (apkPath, outputDir) => {
  return new Promise((resolve, reject) => {
    exec(`apktool d ${apkPath} -o ${outputDir}`, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

// Function to recompile APK using APKTool
const recompileApk = (inputDir, outputApkPath) => {
  return new Promise((resolve, reject) => {
    exec(`apktool b ${inputDir} -o ${outputApkPath}`, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = { extractApk, recompileApk };
