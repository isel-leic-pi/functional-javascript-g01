
const net=require('net')

const port=process.argv[2]

const server=net.createServer((socket)=>{
    const date=new Date()
    //zero filling Date fields
    let month=date.getMonth()+1<10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`
    let day=date.getDate()<10 ? `0${date.getDate()}` : `${date.getDate()}`
    let hour=date.getHours()<10? `0${date.getHours()}` : `${date.getHours()}`
    let minute=date.getMinutes()<10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`

    let data=`${date.getFullYear()}-${month}-${day} ${hour}:${minute}\n`
    socket.end(data)
})
server.listen(parseInt(port))