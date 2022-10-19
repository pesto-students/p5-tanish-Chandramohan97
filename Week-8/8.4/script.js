// JS Code to find if path exists in Graph.

function pathCheck(edges, source , destination){

    let ctr; 
    for( let i = 0 ; i < edges.length; i++){
        ctr = 0;
        for( let j = 0 ; j < edges[i].length ; j++){
            if( edges[i][j] == source || edges[i][j] == destination){
                ctr++;
            }
        }

        if(ctr == 2){
            break;
        }
    }

    if( ctr == 2) return `Path found between ${source} & ${destination}`;
    else return `No Path found between ${source} & ${destination}`
}

// edges = [ [0,1] , [1,2] , [2,0]]
edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]
let source = 0 , destination = 5;
console.log(pathCheck(edges,source,destination));

// Time Complexity - O(N*N) - as the program traverses through twice. 
// Space Complexity - O(1) - as no new Graph of size N introduced.