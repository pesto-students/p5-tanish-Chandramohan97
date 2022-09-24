// Implementation to Pair With Given Difference //

function returnTarget(arr, target) {

    // Sorting the array before implementing Two pointer technique

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
      if (Math.abs(arr[start] - arr[end]) == target) { return ctr++; }
      else if ( Math.abs(arr[start] - arr[end]) > target) { end -= 1; }
      else { start += 1; }
    }
    return ctr;
  }
  console.log(returnTarget(arr, 78));

  // Space Complexity : O(1) - as no new array was created during the operation. 
  // Time Complexity  : O(N). The time complexity is (3N)/2 - 'N' for the for loop starting from line 7(till line 14)
  // and N/2 for the while loop starting from line 18( TILL 24)