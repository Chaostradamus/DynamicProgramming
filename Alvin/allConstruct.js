// count construct...construct a string out of wordbank given and count how many diff ways

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("chao", ["ch", "a", "o", "cha", "c"]));

// m = target.length
// n = wordbank.length

// brute
// time:O(n^m )
// space: O(m)

// memoized
// time: O(n * m^2)
// space: O(m^2)

// allconstruct tabulation method

const allConstructTab = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombo = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombo);
      }
    }
  }
  return table[target.length];
};

// ~O(n^m) time
//  ~O(n^m) space
