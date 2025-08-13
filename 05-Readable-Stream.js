// 5. Use a readable stream to read data.txt and log chunks to the console, and explain the benefit of using streams instead of fs.readFile().

const fs = require('fs');

// Create a readable stream for data.txt
const readableStream = fs.createReadStream('data.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('Received chunk:');
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('Finished reading file.');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
