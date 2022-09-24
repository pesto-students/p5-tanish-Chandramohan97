arr = [2,2,2,2,2,2,0,1,2,1,0,1,2]
let ctr0 = 0, ctr1 = 0 , ctr2 = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if( arr[i] == 0){ ctr0 ++;}
  else if( arr[i] == 1){ ctr1 ++;}
  else( arr[i] == 2)
    { ctr2 ++;}
}
let i = 0; 
while( i < arr.length){
  if( ctr0 != 0 ){
    arr[i] = 0; 
    ctr0 -= 1; 
    i++;
  }else if( ctr1!= 0){
    arr[i] = 1; 
    ctr1 -= 1; 
    i++;
  }else{
     arr[i] = 2; 
     ctr2 -= 1; 
     i++;
    
  }
}
console.log(arr);

// Time Complexity = O(n) - as the for loop runs twice for Nth time i.e. N+N = 2N ~ N = O(N)
// Space complexity = 1;