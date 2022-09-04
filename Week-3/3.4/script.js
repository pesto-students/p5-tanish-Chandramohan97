// Script File 

function createStack() {
    items = [];                      // declaring items in the function with let keyword so it's not accessible 
    return {                         // outside of the createStack function but is accessible by the method - closures
      push(item) {
        // var items = [];
        items.push(item);
      },
      pop() {
        items.pop();
      },
    };
  }
  
  const stack = createStack();
  stack.push(10);
  // console.log(stack.items);
  stack.push(5);
  // console.log(stack.items);
  stack.pop();
  console.log(stack.items);