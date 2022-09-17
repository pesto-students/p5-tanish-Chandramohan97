
function doTask1(n) {
    console.log('Task 1 computes square of a number');
    return n * n;
  }
  
  function doTask2(n) {
    console.log('Task 2 computes cube of a number');
    return n * n * n;
  }
  
  function doTask3() {
    console.log('Task 3 displays a random number');
    return Math.random();
  }
  
  async function Async1() {
  
    console.log('Executing using Async await');
    // try catch block for doTask1//
    try {
      promise1 = new Promise((resolve, reject) => {
        resolve(doTask1(10));
      });
    } catch (err) {
      console.log('Wrong input')
    }
  
    let response1 = await promise1;
    console.log(response1);
  
    // try catch block for doTask2//
    try {
      promise2 = new Promise((resolve, reject) => {
        resolve(doTask2(10));
      });
    } catch (err) {
      console.log('Wrong input')
    }
  
    let response2 = await promise2;
    console.log(response2);
  
    try {
      promise3 = new Promise((resolve, reject) => {
        resolve(doTask3());
      });
    } catch (err) {
      console.log('Wrong input')
    }
  
    // try catch block for doTask3//
  
    let response3 = await promise3;
    console.log(response3);
  
  }
  
  Async1();
  
  function* generator() {
    yield doTask1(10);
    yield doTask2(10);
    yield doTask3(10);
  
  }
  
  for (let el of generator()) {
    console.log(el);
  }