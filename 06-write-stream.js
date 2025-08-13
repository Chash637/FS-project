// 6. Write a program to write "Welcome to Node.js" into a file named welcome.txt, and read the content of welcome.txt and log it using a callback.
const fs = require('fs');

const content = 'Welcome to Node.js';

// Write content to welcome.txt
fs.writeFile('welcome.txt', content, 'utf8', (writeErr) => {
  if (writeErr) {
    return console.error('Error writing file:', writeErr);
  }

  console.log('File written successfully.');

  // Read the content back
  fs.readFile('welcome.txt', 'utf8', (readErr, data) => {
    if (readErr) {
      return console.error('Error reading file:', readErr);
    }

    console.log('Content of welcome.txt:');
    console.log(data);
  });
});
