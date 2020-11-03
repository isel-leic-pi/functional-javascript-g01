const fs = require('fs')
const path = require('path')
const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, (err, files) => {
    if (err) return console.log(err);
    files.filter(f => path.extname(f).slice(1) === ext)
        .forEach(f => console.log(f))
})