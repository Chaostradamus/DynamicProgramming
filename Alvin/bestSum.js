// best path returns shortest array to hit target

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(220, [6, 3, 2, 10]));

// brute
// time: O(n^m *m)
// space: O(m ^ 2);

// memoized;
// time: O(m ^ (2 * n));
// space: O(m ^ 2);

// bestSumtabulation

const bestSumTab = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i] === null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[target];
};

// O(m^2n) time
// O(m^2) space
