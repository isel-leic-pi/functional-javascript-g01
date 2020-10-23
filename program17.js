function curryN(fn, n) {
    const N = n===undefined ? fn.length : n
    return function curryX(arg){
        return N<=1 ? fn(arg) : curryN(fn.bind(this, arg), N-1)
    }
}

module.exports = curryN