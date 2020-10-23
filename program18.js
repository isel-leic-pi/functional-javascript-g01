//module.exports = Function.prototype.call.bind(Array.prototype.slice) every function inherits from Function.prototype

module.exports = Function.call.bind(Array.prototype.slice)