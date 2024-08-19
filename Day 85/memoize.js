const memoize = () => {
  const cache = new Map();
  return (n) => {
    if (cache.has(n)) {
      console.log("Retrieving from cache");
      return cache.get(n);
    } else {
      console.log("Calculating result");
      const result = n * n;
      cache.set(n, result);
      return result;
    }
  };
};

const memoizedSquare = memoize();
console.log(memoizedSquare(5));
console.log(memoizedSquare(15));
console.log(memoizedSquare(5));
