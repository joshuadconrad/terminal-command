const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('new-file.txt', 'new file', 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./new-directory', { recursive: true }, (err) => {
    if (err) throw err;
  });
};
