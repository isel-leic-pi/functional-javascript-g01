module.exports = input => input.reduce((prev, cur, i, arr) => {
    if (!prev[cur]) prev[cur] = 1
    else prev[cur]++

    return prev
}, {})