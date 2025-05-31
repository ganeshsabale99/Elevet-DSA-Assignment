var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      let res;
      switch (token) {
        case "+":
          res = a + b;
          break;
        case "-":
          res = a - b;
          break;
        case "*":
          res = a * b;
          break;
        case "/":
          res = Math.trunc(a / b);
          break;
      }
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};

module.exports = evalRPN;
