const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, func) {
    fs.readdir(dir, (err, files) => {
        if (err) return func(err);
        const fl = files.filter(f => path.extname(f).slice(1) === ext)
        func(null, fl)
    })
}