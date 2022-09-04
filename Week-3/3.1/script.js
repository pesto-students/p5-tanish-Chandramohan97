// Code 

add = (...args) => {                              // Taking in unspecified number of inputs and the adding them.
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }