// 4. Create a buffer from the string "Node.js" and print it in hexadecimal form, then modify the first letter of the buffer from "N" to "C" and print the result.

// Create a buffer from the string "Node.js"
const buf = Buffer.from('Node.js');

// Print the buffer in hexadecimal form
console.log('Original buffer in hex:', buf.toString('hex'));

// Modify the first letter from 'N' (ASCII 78) to 'C' (ASCII 67)
buf[0] = 'C'.charCodeAt(0);

// Print the modified buffer as a string
console.log('Modified buffer as string:', buf.toString());
