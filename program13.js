function repeat(operation, num) {
    if (num <= 0) return
    operation()
    setInterval(repeat, 10, operation, --num)
}

module.exports = repeat