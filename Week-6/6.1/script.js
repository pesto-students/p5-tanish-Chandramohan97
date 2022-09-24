// Code Implementation for finding the sub-contiguous array with the largest sum//


arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let meh = 0, msf = -Infinity, max = 0, min = 0;
for (let i = 0; i < arr.length; i++) {
  meh = meh + arr[i];

  if (meh < arr[i]) {
    meh = arr[i];
    min = i;         // Capturing the starting index of the sub-array pertaining to this question
  }
  if (msf < meh) {
    msf = meh;
    max = i;         // Capturing the last index of the sub-array pertaining to this question
  }
}

console.log(`Sum of the sub-contiguous array with the largest sum is ${msf}`);

console.log(`Printing the sub-contiguous array with the largest sum`);
for (let i = min; i <= max; i++) {
  console.log(arr[i]);     
}

// Space Complexity : O(1) - as no new array was introduced for the operation. 
// Time Complexity : O(2N) ~ O(N) - the first for loop will run for the N inputs. Similar for the second for loop which
// displays the sub-contiguous array with the largest sum. Thus making it 2N, which is approximately equal to O(N). Ignoring the time 
// constants for 'if'  operation