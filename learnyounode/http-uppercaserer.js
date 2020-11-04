'use strict'

const map = require('through2-map')

const http = require('http')

const server = http.createServer((request, response) => {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(response)
})
server.listen(Number(process.argv[2]))
