const path = require('path');
const fs = require('fs');

const filesReader = path.join(__dirname, "files");
const copyReader = path.join(__dirname, "files-copy");

fs.rm(copyReader, { recursive: true, force: true }, () => {
    fs.readdir(filesReader, 
      { withFileTypes: true },
      (err, files) => {
        if (err) {
          console.log ('Ошибка');
        }
        fs.mkdir(copyReader, { recursive: true, force: true }, () => {
          files.forEach(file => {
            fs.copyFile(path.join(filesReader, file.name), path.join(copyReader, file.name), () => {
            });
          });
        }); 
      }
    );
});