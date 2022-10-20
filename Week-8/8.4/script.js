// JS Code for 8.4

function validPath(edges, source ,destination){
   

    let adjList = {} ;
    let  visited =[];
    
    //Creating an adjacencyList
    for( edge of edges){
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : adjList[edge[0]] = [edge[1]];
        
        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : adjList[edge[1]] = [edge[0]];
    }
    //DFS traversal method 
    
    const stack = [source];
    visited[source] = true; 
    
    while(stack.length){
        const current = stack.pop();
        if(current == destination) return true;
        
        for( let neighbour of adjList[current]){
            if( !visited[neighbour]){
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
        
    }
    return false;
}

source = 0 , destination = 5; 
edges = [ [0,1] , [0,2] , [3,5] , [5,4] , [4,3] ]
console.log(validPath(edges, source,destination));

// Time Complexity - O(E+V) - where E is the edges and V is the vertices. Adjacency list is created - which amounts for the mentioned time complexity. 
// Space Complexity - O(V) - as the stack created can only have V(vertices) number of elements. 
