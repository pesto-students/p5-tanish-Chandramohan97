//JS Code to implement all paths from source to target.

function allPathsSourceTarget(graph){
    let seed = [[0]]; // starting point
    let N = graph.length - 1; // idx of last node
    let R = []; // result
    const last = (a) => a[a.length - 1];
  
    while (seed.length > 0) {
      let S = [];
      for (const s of seed) {
        for (const g of graph[last(s)]) {
          
          // if end reached add path to result array
          // otherwise add visiting node to path
          (g == N ? R : S).push([...s, g]);
          // console.log(S);
        }
      }
      seed = S;
    }
    return R;
  };
  
  console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));

  