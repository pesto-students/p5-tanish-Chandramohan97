// Implementing JS code to find the time and space complexity pertaining to finding the next 
// Greater element

class Stack{
    constructor(items){
        this.items = [];
    }
    push(element){
        return this.items.push(element);
    }
    
    pop(){
        return this.items.pop();
    }

    length(){
        return this.items.length;
    }

    accessLastElement(){
        return this.items[this.items.length - 1];
    }    
}
 
function lastGreater(arr){
    let stack = new Stack();
    stack.push(arr[0]);
    for( i = 1; i < arr.length ; i++){
        
        while( stack.length() !== 0 && stack.accessLast() < arr[i]){
            console.log(stack.accessLast() + "-->" + arr[i]);
            stack.pop();
    }
        stack.push(arr[i]);
    }
    
    while(stack.length() !== 0){
        // let lastElement = stack.accessLastElement(); 
        console.log( stack.items[stack.length() - 1] + "--›" + -1);
        stack.pop();
    }
    
    return 0;
}

lastGreater([1,3,2,4]);