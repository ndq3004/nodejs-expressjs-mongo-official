const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
//process.env.UV_THREADPOOL_SIZE = 4;

console.log('A');

setTimeout(() => {
  console.log('T1 (setTimeout 0 - from main)');
}, 0);

setImmediate(() => {
  console.log('I1 (setImmediate - from main)');
});

Promise.resolve().then(() => {
  console.log('P1 (Promise microtask - from main)');
});

process.nextTick(() => {
  console.log('NT1 (nextTick - from main)');
});

fs.readFile(__filename, () => {
  console.log('I/O callback (poll phase)');

  setTimeout(() => {
    console.log('T2 (setTimeout 0 - from I/O callback)');
  }, 0);

  setImmediate(() => {
    console.log('I2 (setImmediate - from I/O callback)');
  });

  setTimeout(() => {
    console.log('T2 (setTimeout 0 - from I/O callback)');
  }, 2000);


  Promise.resolve().then(() => {
    console.log('P2 (Promise microtask - from I/O callback)');
  });

  process.nextTick(() => {
    console.log('NT2 (nextTick - from I/O callback)');
  });

  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })

  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })

  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })

  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })
  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })

  crypto.pbkdf2("pasword", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted")
  })
});

console.log('B');
