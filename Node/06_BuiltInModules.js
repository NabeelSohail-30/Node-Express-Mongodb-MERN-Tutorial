//OS, Path, FS, HTTP, etc.
//to find out more about built in modules, go to nodejs.org/api

//OS module
const os = require('os')

console.log('\n----------OS Module---------\n');

console.log(os.userInfo());
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

console.log('\n----------Path Module---------\n');

//Path module
const path = require('path')
console.log(path.sep);
console.log(path.join('content', 'subfolder', 'test.txt'));
console.log(path.basename(__filename));
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, path.basename(__filename)));

console.log('\n----------FS Module(Sync)---------\n');

//FS module
console.log('start');

//const fs = require('fs') // same as below
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
console.log(first);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}`, { flag: 'a' })
const newFile = readFileSync('./content/result-sync.txt', 'utf8')
console.log(newFile);

console.log('done with this task');
console.log('end');

console.log('\n----------FS Module(Async)---------\n');

//FS module
const { readFile, writeFile } = require('fs')

console.log('start')
//read first file
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(`first file: ${result}`);
    const first = result    //store first file content
    //read second file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //console.log(`second file: ${result}`);
        const second = result  //store second file content
        //write to file
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                //console.log('done with this task')
            }
        )
    })
})

readFile('./content/result-async.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(`new file content: ${result}`);
})

//all the consoles for the async approach are commented to avoid confusion

console.log('end')

//async is non-blocking
//sync is blocking
//async is faster
//sync is easier to read
//sync is easier to debug
//sync is easier to write
//sync is easier to maintain
//sync is easier to understand
//sync is easier to test
//sync is easier to use
//async is easier to scale
//async is easier to handle errors
//async is easier to handle multiple requests
//async is easier to handle multiple files
//async is easier to handle multiple operations
//async is easier to handle multiple tasks
//async is easier to handle multiple processes
//alternative to async is promises, which is easier to read and write
//alternative to async is async/await, which is easier to read and write