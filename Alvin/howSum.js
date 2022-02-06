const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(24, [26]));

// brute force
// O(n^m * m) time
// O(m) space

// memoize d
// O(o*m^2) time
// O(m^2) space

// howSum tabulation

const howSumTab = (targetSum, numbers) => {
  table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
    return table[targetSum];
  }
};

// O(m^2 * n) time
// O(m^2) space
