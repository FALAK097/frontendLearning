// Implement a Promise:
// Write a simple Promise implementation and demonstrate its usage.

// Promise states:
// A promise can be in one of three states:
// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      console.log(success);
      if (success) {
        resolve('success');
      } else {
        reject('error');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Promise.all
// Promise.all is a promise that takes an array of promises as an input (an iterable),
// and it gets resolved when all the promises get resolved or any one of them gets rejected.

const promise1 = fetchData();
const promise2 = fetchData();

Promise.all([promise1, promise2])
  .then((results) => console.log('All promises fullfilled', results))
  .catch((error) => console.log('Error is in one of the promises', error));

// Promise.any
// Promise.any is a promise that takes an array of promises as an input (an iterable),
// and it gets resolved when any one of the promises gets resolved or all of them get rejected.

const promise3 = fetchData();
const promise4 = fetchData();

Promise.any([promise3, promise4])
  .then((results) => console.log('Any one of the promises fullfilled', results))
  .catch((error) => console.log('All promises rejected', error));

// Promise.allSettled
// Promise.allSettled is a promise that takes an array of promises as an input (an iterable),
// and it gets resolved when all the promises get resolved or rejected.

const promise5 = fetchData();
const promise6 = fetchData();

Promise.allSettled([promise5, promise6])
  .then((results) =>
    console.log('All promises fullfilled or rejected', results)
  )
  .catch((error) => console.log('Error is in one of the promises', error));

// Promise.race

// Promise.race is a promise that takes an array of promises as an input (an iterable),
// and it gets resolved or rejected when the first promise gets resolved or rejected.

const promise7 = fetchData();
const promise8 = fetchData();

Promise.race([promise7, promise8])
  .then((results) =>
    console.log('First promise fullfilled or rejected', results)
  )
  .catch((error) => console.log('First promise rejected', error));
