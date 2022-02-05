const mergeSort = (array) => {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const leftA = array.slice(0, mid);
  const rightA = array.slice(mid, array.length);

  return merge(mergeSort(leftA), mergeSort(rightA));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result
};

console.log(mergeSort([3, 44, 26, 2, 24, 1]));



// const merge = (left, right) => {
//   //Create New Array
//   const result = [];
//   //Check if left array and right array is empty
//   while (left.length && right.length) {
//     //Find lower value
//     if (left[0] <= right[0]) {
//       //Add left value
//       result.push(left.shift());
//     } else {
//       //Add right value
//       result.push(right.shift());
//     }
//   }
//   //Merge left array
//   while (left.length) result.push(left.shift());
//   //Merge right array
//   while (right.length) result.push(right.shift());
//   //return result array
//   console.log("result:", result);
//   return result;
// };

// console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));