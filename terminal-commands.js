const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (title) => {
  fs.writeFile(title, 'new file', 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports.mkdir = (title) => {
  fs.mkdir('./' + title, { recursive: true }, (err) => {
    if (err) throw err;
  });
};
