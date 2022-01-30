/*
Problem:
	Paid Staircase
	You are climbing a paid staircase. It takes n steps to reach to the top and you have to
	pay p[i] to step on the i-th stair. Each time you can climb 1 or 2 steps.
	What's the cheapest amount you have to pay to get to the top of the staircase?
*/

// Time complexity: O(n)
// Space complexity: O(n)

const paidStaircase = (n, p) => {
  dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = p[1];
  for (let i = 2; i <= n; i++) {
    dp[i] = min(dp[i - 1], dp[i - 2] + p[i]);
  }
  return dp[n];
};

const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(min(6, 24));
console.log(paidStaircase(3, [0, 3, 2, 4]));
