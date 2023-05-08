const path = require('path');
const fs = require('fs');

const style = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist/bundle.css');
const writeStream = fs.createWriteStream(bundle);

fs.readdir(style, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log ('Ошибка')
    }
    files.forEach(files => {
      const extension = path.parse(files.name).ext;
      if (files.isFile() === true && extension === '.css')  {
        const readStream = fs.createReadStream(path.join(style, files.name));
        readStream.on('data', data => writeStream.write(data));
      }
    });
});