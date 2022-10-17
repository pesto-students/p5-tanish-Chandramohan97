// JS code to find out the maximum Binary Tree depth

class Node{
    constructor(data){
        this.data  = data; 
        this.left  = null;
        this.right = null;
    }
}

function maxDepth(root){
    let queue = [];
    let lctr = 0 , rctr = 0;
    queue.push(root);
    
    while(queue.length !== 0){
        let node = queue.shift();
        if(node.left){
          queue.push(node.left);
          lctr += 1;
        }
        if(node.right){
            queue.push(node.right)
            rctr += 1;
        }
            
    }
    if(lctr >= rctr) console.log(`Maximum depth of the Binary tree is ${lctr}`)
    else console.log(`Maximum depth of the Binary tree is ${rctr}`)
}


