/*
Problem:
	Coin change
	Given an unlimited supply of coins of given denominations,
	find the total number of ways to make a change of size n, by
	using an even number of coins.
	// 1, 3, 5, 10
	f[i][0] = f[i-1][1] + f[i-3][1] + f[i-5][1] + f[i-10][1]
	f[i][1] = f[i-1][0] + f[i-3][0] + f[i-5][0] + f[i-10][0]
*/
