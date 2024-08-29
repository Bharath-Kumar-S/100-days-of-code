const curry = (func) => {
  const curried = (...args) => {
    if (args.length >= func.length) {
      return func.apply(this, args); // Use `apply` to pass all arguments and maintain context
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs); // Combine arguments for next call
    }
  };
  return curried;
};

const add = (a, b, c) => {
  return a + b + c;
};

const curriedAdd = curry(add);
let partialAdd = curriedAdd(1);
console.log(partialAdd(2)(3)); // 6
console.log(partialAdd(2, 3)); // 6

console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
