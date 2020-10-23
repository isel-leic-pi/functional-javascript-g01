function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return () => repeat(operation, --num)   // return the next function to jump to
}

function trampoline(fn) { //jump from one function to another
    let next= fn()  //first function jump
    while(next)
        next=next() //jump to the next function
}

module.exports = function(operation, num) {
    return trampoline( () =>repeat(operation, num)) //pass the recursive function with its arguments in a function object
}