const path = require('path');
const fs = require('fs');
const { stdin, stdout} = require('process');

const tesxtFile = path.join(__dirname, 'text.txt');
const outputFile = fs.createWriteStream(tesxtFile, 'utf-8');

stdout.write('Введите ваш текст...\n');
stdin.on('data', (data) => {
    if(data.toString().trim() === 'exit') {
      console.log('Ввод закончен.');
      process.exit();
    } else {
      outputFile.write(data);
    }
});
process.on('SIGINT', () => {
    console.log('Ввод закончен.'); 
    process.exit();
  });  
