const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length
  },
  addLink(value) {
    this.links.push(value)
    return this
  },
  removeLink(position) {
    if (isNaN(position) || position > this.links.length || position < 1) {
      this.links = []
      throw "Error"; 
    }
    this.links.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.links.reverse()
    return this
  },
  finishChain() {
    var chain = ""
    for (let i=0; i<this.links.length; i++) {
      if (i) {
        chain += `~~( ${this.links[i]} )`
      } else {
        chain += `( ${this.links[i]} )`
      }
    }
    this.links = []
    return chain
  }
};

module.exports = chainMaker;
