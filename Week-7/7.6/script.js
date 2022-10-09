// Implementing Queue with 2 Stacks keeping Time and Space complexity in mind.
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

st1 = new Stack(); 
st2 = new Stack(); 

function enQueue(x){
    st1.push(x);
}

function deQueue(){
    
    while( st1.length() !== 0){
        st2.push(st1.pop());
    }
    
    element = st2.pop();
    console.log(element);
    while(st2.length() !== 0){
        st1.push(st2.pop());
    }
}

enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);

deQueue();
deQueue();
deQueue();
deQueue();

// Time Complexity : O(N) as the loop runs through once for array's length.
// Space Complexity : O(1) as there's no new stack or array is introduced.