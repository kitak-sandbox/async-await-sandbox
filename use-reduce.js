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

const done = genPromiseFns.reduce((previous, fn) => {
  return previous.then((n) => {
    return fn();
  });
}, Promise.resolve(0))

done.then((n) => {
  console.log('done all');
});
