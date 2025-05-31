
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];
    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] < num
    ) {
      const idx = stack.pop();
      res[idx] = num;
    }
    if (i < n) stack.push(i);
  }
  return res;
};

module.exports = nextGreaterElements;
