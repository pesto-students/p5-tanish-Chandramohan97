// JS code to implement 8.1 

class Node{
    constructor(data){
        this.data  = data; 
        this.left  = null;
        this.right = null;
    }
}

function maxDepth(node){

    if(node == null){
        return 0;
    }

    else{

        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if( lDepth >= rDepth) {return lDepth + 1;}
        else return  rDepth + 1;
    }

}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.rigth = new Node(5);
console.log(maxDepth(root) - 1);    // Subtracting 1 from the result to get the exact maximum depth of the Binary


// Time Complexity - O(N*N) - in the worst case scenario where the left and ride side of the Binary Tree are equal,
// then the Time Complexity would amount to O(N*N)
// Space Complexity - O(1) as now new Tree was created to compute maximum depth of the Binary Tree.