//OS, Path, FS, HTTP, etc.
//to find out more about built in modules, go to nodejs.org/api

//OS module
const os = require('os')

console.log('----------OS Module---------');

console.log(os.userInfo());
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

console.log('----------Path Module---------');

//Path module
const path = require('path')
console.log(path.sep);
console.log(path.join('content', 'subfolder', 'test.txt'));
console.log(path.basename(__filename));
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, path.basename(__filename)));