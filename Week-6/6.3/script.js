arr = [0, 2,1,1,1,1,1,0]

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    k = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = k;
  }
}

for (let i = arr.length - 1; i > 0; i--) {
  if (arr[i] < arr[i - 1]) {
    k = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = k;
  }
}

console.log(arr);

// Time Complexity = O(n) - as the for loop runs twice for Nth time i.e. N+N = 2N ~ N = O(N)
// Space complexity = 1;