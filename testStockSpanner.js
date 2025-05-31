const StockSpanner = require('./StockSpanner');

const obj = new StockSpanner();

console.log(obj.next(100)); 
console.log(obj.next(80));  
console.log(obj.next(60));  
console.log(obj.next(70));  
console.log(obj.next(60));  
console.log(obj.next(75));  
console.log(obj.next(85));  
