// can construct...construct a string out of wordbank given

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// m = target.length
// n = wordbank.length

// brute
// time:O(n^m * m)
// space: O(m^2)

// memoized
// time: O(n * m^2)
// space: O(m^2)

// cancontsruct tab

const canConstructTab = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
    return table[target.length];
  }
};

// O(m^2n) time

// O(m) space
