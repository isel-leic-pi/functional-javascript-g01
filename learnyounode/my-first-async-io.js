'use strict'

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, (err, data) => {
    if (err) return err;
    const str = data.toString()
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
        if (str[i] == '\n')
            ++count;
    }

    console.log(count)
})