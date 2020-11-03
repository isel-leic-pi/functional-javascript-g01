'use strict'

const fs = require('fs')
const file = process.argv[2]

const str = fs.readFileSync(file).toString()
let count = 0;
for (let i = 0; i < str.length; ++i) {
    if (str[i] == '\n')
        ++count;
}

console.log(count)


