console.log('\n----------HTTP Module---------\n');

//HTTP module
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our resturant')
    }

    if (req.url === '/water') {
        res.end('Here is your water')
    }

    if (req.url === '/coffee') {
        res.end('Here is your coffee')
    }

    res.end('file not found')
})

server.listen(5001)