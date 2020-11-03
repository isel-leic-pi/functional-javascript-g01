
const req=require("http")

const url=process.argv[2]

let content=''
let count=0
req.get(url, (response)=>{
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.on('data', (message)=>{
        count+=message.length
        content=content.concat(message)
    })
    response.on('end',()=>{
        console.log(count)
        console.log(content)
    })

}).on('error', console.error)