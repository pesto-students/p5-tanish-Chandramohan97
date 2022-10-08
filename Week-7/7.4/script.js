//Implement to perform Javascript Parenthesis Checks through Stacks 

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
    
    lastElement(){
        return this.items[this.items.length - 1];   // to access last element
    }
}