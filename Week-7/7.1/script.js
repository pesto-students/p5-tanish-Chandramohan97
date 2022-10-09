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
 

}