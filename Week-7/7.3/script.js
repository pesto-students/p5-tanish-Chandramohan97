// Javascript implementation to detect cycle in linked list.

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
    createLoop(){
        let current = this.head; 
        while(current.next !== null){
            current = current.next; 
        }
        current.next = this.head.next; // Creating a loop by joining the last element to the second element.
        
        let slow = this.head;
        let fast = this.head; 
        
        while( fast !== null && slow !== null){
            slow = slow.next; 
            fast = fast.next.next;
            if( slow == fast){
                slow = null;
                return 'Loop detected';
            }
            
        }
    }
}

let l1 = new SingleLinkedList(1);
l1.append(2);
l1.append(3);
l1.append(4);
console.log(l1.createLoop());

// Time Complexity - O(N) - as the iteration time depends on when the slow node meets the fast node. Which directly 
// depends on the number of nodes. 
// Space Complexity - O(1) - as no new linked list was declared.