const path = require('path');
const fs = require('fs');

const folderFiels = path.join(__dirname, 'secret-folder');

fs.readdir(folderFiels, (err, files) => {
  if (err) console.log(err.message);
  files.forEach((file) => {
    fs.stat(path.join(folderFiels, file), (err, stats) => {
      if (err) console.log(err.message);
      if (stats.isFile()) 
      console.log(`${(path.parse(file)).name} - ${(path.parse(file)).ext.replace(".", "")} - ${stats.size}kb`);
    });
  });
});