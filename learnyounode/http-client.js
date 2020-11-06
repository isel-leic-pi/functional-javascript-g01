
const req=require("http")

const url=process.argv[2];

/*req.get(url, (response)=>{ //my solution
    response.setEncoding("utf8")
    response.on('data',(err, data)=>{
        if(err) return console.log(err)
        console.log(data)
    })
})*/

req.get(url, (response)=>{  //official solution
    response.setEncoding("utf8")
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)