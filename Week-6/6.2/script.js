// Code Implementation for Printing 2-D array in spiral form//

// arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// arr = [[1, 2, 3], [4, 5, 6]]

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
Top = 0;       // Top instead of 'top' as top is a keyword in Javascript.
down = arr.length - 1;
left = 0;
right = arr[0].length - 1;  // calculating the columns length 
let dir = 0;

while (Top <= down && left <= right) {

  if (dir == 0) {
    for (i = left; i <= right; i++) {
      console.log(arr[Top][i]);
    }
    Top = Top + 1;
  } else if (dir == 1) {
    // Top = Top + 1;
    for (i = Top; i <= down; i++) {
      console.log(arr[i][right]);
    }
    right = right - 1;
  } else if (dir == 2) {
    // right = right - 1;
    for (i = right; i >= left; i--) {
      console.log(arr[down][i]);
    }
    down = down - 1;
  }
  else if (dir == 3) {
    // down = down - 1;
    for (i = down; i >= Top; i--) {
      console.log(arr[i][left]);
    }
    left = left + 1;
  }

  dir = (dir + 1) % 4;
}

// Space Complexity - O(1) as no new array was introduced for the operation. 
// The inner for loop't time complexity will be dependent on both the columns and rows i.e. Time Complexity = O(M) + O(N) ~ O(MN)