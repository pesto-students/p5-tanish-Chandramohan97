// Implementation of Promise as per the assignment. 

function getNumber(){
    return Math.random() * 100; 
}

let promise = (number, ms) => new Promise(function (resolve, reject) {
    if (number % 5 !== 0) {
        setTimeout(() => resolve(number), ms);
    }
    else {
        setTimeout(() => reject(number), ms);
    }
});

promise(getNumber, 1000)
    .then((num) => console.log("Promise is resolved"))
    .catch((error) => console.log("Promise is not resolved"))
    .finally(() => console.log("Promise is fulfilled")) 