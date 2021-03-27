const CustomError = require("../extensions/custom-error");

const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }
  encrypt(message, key) {
    message = message.toUpperCase()
    key = key.toUpperCase()
    var res = ""
    let i = 0
    for (let char of message) {
      if (char.match(/[A-Z]/i)) {
        let shift = Alphabet.indexOf(key[i])
        i = ++i % key.length
        let index = Alphabet.indexOf(char)
        res += Alphabet[(index + shift)%26]
      } else {
        res += char
      }
    }
    if (this.direct) {
      return res
    } else {
      return res.split("").reverse().join("");
    }
  }    
  decrypt(encryptedMessage, key) {
    key = key.toUpperCase()
    var res = ""
    let i = 0
    for (let char of encryptedMessage) {
      if (char.match(/[A-Z]/i)) {
        let unshift = Alphabet.indexOf(key[i])
        i = ++i % key.length
        let index = Alphabet.indexOf(char) - unshift
        if (index < 0) {
          res += Alphabet[26 + index]
        } else {
          res += Alphabet[index]
        }
      } else {
        res += char
      }
    }
    if (this.direct) {
      return res
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
