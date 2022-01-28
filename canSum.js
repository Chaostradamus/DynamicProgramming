const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [4, 3]));

// canSum tabulation version

const canSumTab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = false;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

// O(mn) time
// O(m) space
