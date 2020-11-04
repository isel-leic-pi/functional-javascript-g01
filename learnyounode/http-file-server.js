'use strict'

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    const src = fs.createReadStream(process.argv[3])
    src.pipe(response)  
})
server.listen(Number(process.argv[2]))
