// JS code to implement level order traversal 

class Node{
    constructor(value){
        this.data = value; 
        this.left = null;
        this.right = null;
    }
}

function levelOrder(root){
    let queue = [];
    queue.push(root);
    // console.log(queue);
    
    while(queue.length !== 0){
        let node = queue.shift();
        console.log(node.data);
        
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right)
    }
}

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);
levelOrder(root);