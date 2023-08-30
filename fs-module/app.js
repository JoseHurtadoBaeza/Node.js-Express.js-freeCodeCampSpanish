const fs = require('fs');

// Read a file

console.log('Before reading the file...');

const file = fs.readFileSync('index.html', 'utf-8');

console.log(file);

console.log('After reading the file...');

// Change a file name

fs.renameSync('index.html', 'main.html');

console.log('After change the name...');

// Add content to the end of a file.
fs.appendFileSync('main.html', '<p>Hola</p>');

console.log('After add content to the file');

// Replace all the file content

fs.writeFileSync('main.html', 'New content');

console.log('After replace the file content');

// Remove file.

fs.unlinkSync('main.html');

console.log('After remove the file');