// JS code to implement 8.1 

class Node{
    constructor(data){
        this.data  = data; 
        this.left  = null;
        this.right = null;
    }
}

function maxDepth(node){

    if(node.data == null){
        return 0;
    }

    else{

        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if( lDepth >= rDepth) {return lDepth+1;}
        else return  rDepth+1;
    }

}

let root = new Node(null);
// root.left = new Node(2);
// root.right = new Node(3);
console.log(maxDepth(root));