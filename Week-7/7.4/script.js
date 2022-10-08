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