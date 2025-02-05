import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';

// If createRequire is not used, remove the import statement
// Otherwise, ensure it is used correctly in the code

// Example usage of createRequire if needed
// const require = createRequire(import.meta.url);
// const someModule = require('some-module');

// If not needed, remove the import statement
// import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('__filename', __filename);
console.log('__dirname', __dirname);

