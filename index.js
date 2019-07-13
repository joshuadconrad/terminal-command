const myLibrary = require('./my-library');
myLibrary.myFirstMethod();

const uuid = require('uuid');
const newUuid = uuid();

console.log(`your new Universally unique identifier is ${newUuid}`);

const terminalCommands = require('./terminal-commands');

terminalCommands.ls();

terminalCommands.mkdir('new-directory');

terminalCommands.touch('new-file.txt');
