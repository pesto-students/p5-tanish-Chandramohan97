//Implementing Reversing a linked list with optimised Time and Space Complexity//

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList{
    
    constructor(data){
        this.head = new Node(data);
    }

    append(data){
        
        let current;
        let node = new Node(data);
        if(this.head == null) this.head = node;
        else{
            current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        
    }
    printList(){
        
        const arr = [];
        let currentList = this.head;
        
        while(currentList !== null){
            array.push( currentList.data);
            currentList = currentList.next;
        }
        array.push('null');
        console.log(array.join('-->'))
    }   
 
    reverse(){
        let curr = this.head; 
        let prev = null , next = null ; 
        while( curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        const array = [];
        while(prev != null){
            array.push(prev.data);
            prev = prev.next;
        }
        array.push('null');
        console.log(array.join('-->'))
    }
 }

 let l1 = new SingleLinkedList(10);
// l1.printList();
l1.append(20);
l1.append(30);
l1.append(40);
console.log('Before Reversal')
l1.printList();
console.log('After Reversal')


// Time Complexity - O(2N) = O(N). First O(N) for the loop which involves reversing and the second O(N) for printing
// which traverses through the linked list. 
// Space Complexity - O(1) as no new linked list was created.