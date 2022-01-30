/*
Problem:
	Climbing Stairs
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1 or 2 steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)
*/

// Time complexity: O(n)
// Space complexity: O(n)

const stairs = (n) => {
  dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/*
Problem:
	Climbing Stairs (space optimized)
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1 or 2 steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)
*/

const stairs2 = (n) => {
  dp = Array(n + 1);
  let a = 1;
  let b = 2;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return dp[n];
};

/*
Problem:
	Climbing Stairs (3 steps)
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1, 2 or 3 steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
		f(2) = 2
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2) + f(n-3)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)
        
// Time complexity: O(n)
// Space complexity: O(n)
*/
const stairs3Steps = (n) => {
  dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

/*
Problem:
	Climbing Stairs (k steps)
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can climb 1..k steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair by making 1 to k steps.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2) + ... + f(n-k)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)
*/

// Time complexity: O(nk)
// Space complexity: O(n)
const sstairs3Steps = (n, k) => {
  dp = Array(n + 1);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i - j < 0) {
        continue;
      }
      dp[i] += dp[i - j];
    }
  }
  return dp[n];
};

console.log(sstairs3Steps(7,2))