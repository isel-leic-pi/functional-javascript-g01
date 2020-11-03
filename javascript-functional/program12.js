function Spy(target, method) {
    const init = target[method]
    
    let result = {
        count : 0,
    }

    target[method] = function() {
        result.count++
        const slice = Array.prototype.slice.apply(arguments)
        return init.apply(target,slice)
    }

    return result
}

module.exports = Spy