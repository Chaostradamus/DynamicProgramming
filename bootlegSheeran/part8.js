/*
Problem:
	Paid Staircase II
	You are climbing a paid staircase. It takes n steps to reach to the top and you have to
	pay p[i] to step on the i-th stair. Each time you can climb 1 or 2 steps.
	Return the cheapest path to the top of the staircase.
Template to reconstruct the path
================================
	path = []
	for curr = best_last_state; curr exists; curr = from[curr] {
		path.push(curr)
	}
	return path.reverse()
*/

// Time complexity: O(n)
// Space complexity: O(n)

const paidStaircase2 = (n, p) => {
  dp = Array(n + 1);
  from = Array(n + 1);
  dp[0] = 0;
  dp[1] = p[1];
  for (let i = 2; i <= n; i++) {
    dp[i] = min(dp[i - 1], dp[i - 2]) + p[i];
    if (dp[(i = 1)] < dp[i - 2]) {
      from[i] = i - 1;
    } else {
      from[i] = i - 2;
    }
  }

 var path = [];
  for (current = n; current >= 0; current = from[current]) {
    path.push(current);
    if (current == 0) {
      break;
    }
  }
  return path;
};

const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(paidStaircase2(8, [0, 3, 2, 4, 6, 1, 1, 5, 3]));
