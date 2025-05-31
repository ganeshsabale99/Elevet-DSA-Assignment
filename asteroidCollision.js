function asteroidCollision(asteroids) {
  const stack = [];
  for (let asteroid of asteroids) {
    while (
      stack.length > 0 &&
      asteroid < 0 &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1];
      if (top < -asteroid) {
        stack.pop();
        continue;
      } else if (top === -asteroid) {
        stack.pop();
      }
      asteroid = 0;
      break;
    }
    if (asteroid !== 0) stack.push(asteroid);
  }
  return stack;
}


module.exports = asteroidCollision;
