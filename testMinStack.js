
const MinStack = require('./minStack');

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('Min:', minStack.getMin()); 
minStack.pop();
console.log('Top:', minStack.top());   
console.log('Min:', minStack.getMin());
