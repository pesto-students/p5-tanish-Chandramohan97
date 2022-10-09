//Javascript code to shift Linked List element by kth element from the 
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
    
    shiftElement(k){
        let temp = this.head;
        let kthNode = null; // node at the kth element
        let ctr = 1;
        let arr =[];
        while(temp.next !== null){
            if(ctr == k) { kthNode = temp}
            ctr++;
            temp = temp.next
        }
        
        if( k < ctr){
            temp.next = this.head;
            this.head = kthNode.next;
            kthNode.next = null;
        }
        
        temp = this.head;
        while(temp !== null){
            arr.push(temp.data);
            temp = temp.next;
        }
        arr.push('null');
        console.log(arr.join('-->'));
}
}

let l1 = new SingleLinkedList(1);
l1.append(2)
l1.append(3)
l1.append(4)
l1.append(5)
l1.append(6)
l1.append(7)
l1.append(8)

l1.shiftElement(4);

//Time Complexity - O(k) as the iteration depends on the kth element. 
//Space Complexity - O(1) - no new linked list was created.