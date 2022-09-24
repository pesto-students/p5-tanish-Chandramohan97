// Implementation to Pair With Given Difference //

function returnTarget(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i = -1;      // i set to -1 once post swapping
      }
    }
    console.log(arr); // printing the array in sorted array. 
  
    let start = 0, end = arr.length - 1, ctr = 0;
    while (start < end) {
      if (Math.abs(arr[start] - arr[end]) == target) { return 1; }
      else if ( Math.abs(arr[start] - arr[end]) > target) { end -= 1; }
      else { start += 1; }
    }
  }
  console.log(returnTarget(arr, 78));