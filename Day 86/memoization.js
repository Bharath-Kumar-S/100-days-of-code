//factorial with closures cache

const factorial = (function () {
  const cache = {};

  return function (num) {
    if (num in cache) {
      return cache[num];
    } else {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        cache[num] = num * factorial(num - 1);
        return cache[num];
      }
    }
  };
})();
