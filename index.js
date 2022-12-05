
const myInfos = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello, je m'appelle ${myInfos.firstName} et je suis au ${myInfos.campus}.`,
    e : "><",
    T : "✿"
}));