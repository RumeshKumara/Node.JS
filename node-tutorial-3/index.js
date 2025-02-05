import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import { readFile } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { appendFile } from 'node:fs/promises';
import { rm } from 'node:fs/promises';

// If createRequire is not used, remove the import statement
// Otherwise, ensure it is used correctly in the code

// Example usage of createRequire if needed
// const require = createRequire(import.meta.url);
// const someModule = require('some-module');

// If not needed, remove the import statement
// import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Example usage of readFile
 // Replace 'read.txt' with the actual file name and path.
 // This example reads a text file and logs its contents to the console.
 // Adjust the encoding to 'utf-8' if your file contains non-ASCII characters.
 // If you want to handle errors, add an error handling callback to the readFile function.
 // For example:
 // readFile(join(__dirname,'read.txt'), {encoding: 'utf-8'}, (err, data) => {
readFile(join(__dirname, 'read.txt'), {
    encoding: 'utf-8',
  
},

(err, data) => {
    if (!err){
    console.log(data);
    }
});

// Example usage of writeFile
// Replace 'write.txt' with the actual file name and path.
// This example writes a string to a text file.
writeFile(join(__dirname, 'write.txt'), 'Hello from Node.js', (err) => {
    if (!err){
    console.log('File created or overwritten');
    }
});

// Example usage of appendFile
// Replace 'write.txt' with the actual file name and path.

// This example appends a string to a text file.
appendFile(join(__dirname, 'write.txt'), ' Hello from Node.js', (err) => {
    if (!err){
    console.log('Content appended to file');
    }
});

// Example usage of appendFile
appendFile(join(__dirname, 'write.js'),
 `const a = 21;
 const b = 21;`, 
 (err) => {
    if (!err){
    console.log('Content appended to file');
    }
});

rm(join(__dirname, 'write.js'), (err) => {
    if (!err){
    console.log('File deleted');
    }
});