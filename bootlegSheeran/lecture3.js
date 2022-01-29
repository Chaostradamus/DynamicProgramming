/*
Problem:
	Find the sum of the first N numbers.
Objective function:
	f(i) is the sum of the first i elements.
Recurrence relation:
	f(n) = f(n-1) + n
 */

const nSum = (n) => {
  dp = Array(n + 1).fill(0);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + i;
  }
  return dp[n];
};

console.log(nSum(3));
