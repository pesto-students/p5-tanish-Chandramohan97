
function doTask1(n) {
  console.log('Task 1 computes square of a number');
  return n * n;
}

function doTask2(n) {
  console.log('Task 2 computes cube of a number');
  return n * n * n;
}

function doTask3(n) {
  console.log('Task 3 adds n to a random number');
  return Math.random() + n;
}

async function Async1() {

  console.log('Executing using Async await');
  
  let param1 = 10;   // Parameter for doTask1. User can change the input to a numberic or any other  format//
  let promise1 = await new Promise((resolve, reject) =>{
    if (Number(param1)) {
      resolve(doTask1(param1));
    }
    else {
      reject(new Error("Invalid Input for doTask1"));
    }
  });

  console.log(promise1);
  
  let param2 = '10'    // Parameter for doTask3//
  let promise2 = await new Promise((resolve, reject) =>{
    if (Number(param2)) {
      resolve(doTask2(param2));
    }
    else {
      reject(new Error("Wrong Input for doTask2"));
    }
  })

  console.log(promise2);

  let param3 = [1, 3, 4]   // parameter fo doTask3//

  let promise3 = await new Promise((resolve, reject) => {
    if (Number(param3)) {
      resolve(doTask3(param3));
    }
    else {
      reject(new Error("Wrong Input for doTask3"));
    }
  });

  
  console.log(promise3);
}

function* generator(){
  
  let param1 = 10 , param2 = '10' , param3 = [1,2,3];

  console.log('Using Generator function');

  promise1 =  new Promise( (resolve , reject ) =>{
      if(Number(param1)){
        resolve(doTask1(param1))
        }else{
          reject('Wrong input for Task1')
      }
  }); 

  yield promise1.then(
    (value) =>{ console.log(value);},
    (error) => { console.log(error);},
  );

  promise2 = new Promise( (resolve , reject ) =>{
  if(Number(param2)){
      resolve(doTask2(param2))
    }else{
        reject('Wrong input for Task2')
      }
  });

  yield promise2.then(
    (value) =>{ console.log(value);},
    (error) => { console.log(error);},
  );

  promise3 = new Promise( (resolve , reject ) =>{
  if(Number(param3)){
      resolve(doTask3(param3))
    }else{
        reject('Wrong input for Task3')
      }
  });

  yield promise3.then(
    (value) =>{ console.log(value);},
    (error) => { console.log(error);},
  );
  
}

Async1();
a = generator(); 
a.next();
a.next();
a.next();