const mymodule = require('./mymodule')
const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir, ext, (err, data) => {
    if (err) return console.log(err)
    data.forEach(f => console.log(f))
})