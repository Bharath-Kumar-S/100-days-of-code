const func1 = async () => {
  return Promise.resolve("a");
};

const func2 = async () => {
  return new Promise((resolve, reject) => {
    return resolve("b");
  });
};

const func3 = async () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve("c");
    }, 5000);
  });
};

(async () => {
  const res = await Promise.all([func1(), func2(), func3()]);
  console.log(res);
})();

(async () => {
  const res = await Promise.allSettled([func1(), func2(), func3()]);
  console.log(res);
})();
