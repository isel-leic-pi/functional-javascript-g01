'use strict'

const http = require('http')
const url = require('url');

const parse = '/api/parsetime'
const unix = '/api/unixtime'
const server = http.createServer((request, response) => {

        const urlP = url.parse(request.url,true)
        switch(urlP.pathname) {
            case parse:
                const date = new Date(urlP.query.iso);
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify({
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                  })); 
                break
            case unix:
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify({unixtime: (new Date(urlP.query.iso)).getTime()}));
                  break 
            default:
                response.writeHead(404);
                response.end();
        }
})
server.listen(Number(process.argv[2]))
