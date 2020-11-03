var slice = Array.prototype.slice

module.exports = (namespace) => {
  return function add() {
    return console.log.apply(null,[namespace].concat(slice.call(arguments)))
  }
}