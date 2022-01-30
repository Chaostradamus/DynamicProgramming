/*
Problem:
	Climbing Stairs (k steps, space optimized)
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can climb 1..k steps.
	In how many distinct ways can you climb to the top?
*/

// Time complexity: O(nk)
// Space complexity: O(k)

const stepsInK = (n, k) => {
  dp = Array(k);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < k; j++) {
      if (i - j < 0) {
        continue;
      }
      dp[i % k] += dp[(i - j) % k];
    }
  }
  return dp[n % k];
};

/*
Problem:
	Climbing Stairs (k steps, space optimized, skip red steps)
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can climb 1..k steps. You are not allowed to step on red stairs.
	In how many distinct ways can you climb to the top?
*/

// Time complexity: O(nk)
// Space complexity: O(k)

const redSteps = (n, k, stairs) => {
  dp = Array(k);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < k; j++) {
      if (i - j > 0) {
        continue;
      }
      if (stairs[i - 1]) {
        dp[i % k] = 0;
      } else {
        dp[i % k] += dp[(i - j) % k];
      }
    }
  }
  return dp[n % k];
};

console.log(redSteps(7, 3, [1, 3, 4]));
console.log(stepsInK(7, 3));
