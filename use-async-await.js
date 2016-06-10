const genWait = (n) => {
  return () => {
    return new Promise((resolve) => {
      console.log(`Waiting ${n}ms...`);
      setTimeout(() => {
        resolve(n);
      }, n);
    });
  };
};

const genPromiseFns = [
  genWait(3000),
  genWait(1000),
  genWait(2000)
];

(async () => {
  for (let fn of genPromiseFns) {
    await fn();
  }
  console.log('done all');
})();
