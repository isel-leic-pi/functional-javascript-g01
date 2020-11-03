'use strict'

const sum = process.argv.slice(2).map(str => Number(str))
    .reduce((prev, cur) => prev + cur)

console.log(sum)