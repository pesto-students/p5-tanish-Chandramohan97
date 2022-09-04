// Code 

add = (...args) => {                              // Taking in unspecified number of inputs and the adding them.
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }

  const memoize = (add) => {                                              
    let cache = {};
    return function(...args) {
    
    // Using the map function to convert each element of the ...args array to String and concatenating thereafter using the join('') to create a singular element. Using this singular element as an array element afterwards and storing that in the cache variable.
    
    let cacheKey = args.map(n => n.toString() + '+').join('');
    
    if (cacheKey in cache) {
        console.log("Already present in Cache");
        return cache[cacheKey];
      }
      
      else {
        console.log('Calculating first time');
        let result = add(...args);
        cache[cacheKey] = result;
        return result;
      }
    }
  }
  