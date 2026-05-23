const fs = require('fs');
const msg = `You've been hepld by ${process.argv.slice(1).join(':')}`;
console.log(msg);
fs.appendFileSync(__filename, `\n// ${Date.now()}: ${msg}`);