const evalRPN = require('./evalRPN');

console.log(evalRPN(["2", "1", "+", "3", "*"])); 
console.log(evalRPN(["4", "13", "5", "/", "+"])); 
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*"])); 
