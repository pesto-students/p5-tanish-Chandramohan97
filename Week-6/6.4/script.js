// Implementing code for Question 6.4 - Best Time to buy and sell stock//

let arr = [7, 6, 4, 3, 1]
let min = arr[0], max = arr[0], min_index = 0, max_index = 0;

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
    min_index = i;
  }

  if (max < arr[i]) {
    max = arr[i];
    max_index = i;
  }
}

if (max_index == 0) {                        // Incase the first element is of the maximum value.
  max = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      max_index = i;
    }
  }
}

if (max - min > 0 && min_index < max_index) {
  console.log(`Profit is ${max - min}`);
}
else {
  console.log('Profit is 0')
}

// Time Complexity - O(N) + O(N) = O(2N) ~ O(N). First O(N) for the first loop and second O(N) for the second for loop.
// Space Complexity - O(1) as no new array was defined during the operation.