import path, { join } from 'node:path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(os.platform());
console.log(os.release());
console.log(os.version());
console.log(os.uptime());
console.log(os.type());

console.log(__filename);
console.log(path.parse(__filename));

readFile(join(__dirname, 'myName.txt'), (err, data) => {
    if (err) {
        console.log(err); // Corrected from 'error' to 'err'
    } else {
        console.log(data.toString()); // Ensure data is converted to string
    }
});


