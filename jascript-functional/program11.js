module.exports = function arrayMap(arr, fn) {
    return arr.reduce(
        (acumulador, valorAtual, index, array) => {
            acumulador[index] = (fn(valorAtual))
            return acumulador
        },[]
        )
}