
function reduce(arr, fn, initial) {

    return (function reAux(index,initial) {
        if(index >= arr.length){
            return initial
        }
        initial = fn(initial,arr[index],index,arr)
        index++
        return reAux(index,initial)
    })(0,initial)

}

module.exports = reduce