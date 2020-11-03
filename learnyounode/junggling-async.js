
const req=require('http')
const { argv } = require('process')

const urls=process.argv.slice(2, 5)
const content=["", "", ""]
let count=0

for (let idx = 0; idx < urls.length; idx++) {
    req.get(urls[idx], (response)=>{
        response.setEncoding('utf8')
        response.on('error', console.error)
        response.on('data', (message)=>{content[idx]=content[idx].concat(message)})
        response.on('end', ()=>{
            count++
            if(count==content.length)
                printContent()
        })
    })
}

function printContent(){
    for (let i = 0; i < content.length; i++) {
        console.log(content[i])
    }
}
