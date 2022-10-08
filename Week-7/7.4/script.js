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

function ParenthesisChecker(exp){
    
    let stack = new Stack(); 
    
    for(let i = 0 ; i < exp.length ; i++){
        if(stack.length() == 0 || exp[i] == '{' || exp[i] == '(' || exp[i] =='['){
            stack.push(exp[i]);
        }
        
        else if( ( stack.lastElement() == '[' && exp[i] == ']')
            ||  ( stack.lastElement() == '{' && exp[i] == '}' )
            ||  ( stack.lastElement() == '(' && exp[i] == ')' ) ){
                stack.pop();
            }
        else{
            stack.push(exp[i]);
        }
    
    }
    if(stack.length() == 0 ) return true ; 
    else{ return false;}
}

console.log(ParenthesisChecker('[()]{}{()()}')); // true if the string passed is balanced. False if it's unbalanced.


// Time Complexity - O(N) - as the for loop only runs throught the length of the expression. 
// Space Complexity - O(1) in best case scenario if the stack is emptied. O(N) if no element are popped out