function duckCount() {
    counter = 0
    for(let i = 0; i < arguments.length; i++){
        if(Object.prototype.hasOwnProperty.call(arguments[i],'quack'))
            counter++
    }
    return counter
}

module.exports = duckCount