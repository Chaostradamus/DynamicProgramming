/*
Problem:
	Shortest Path in DAG
	Given a graph as an adjacency matrix, find the shortest path
	from the first to the last vertex.
	Objective function:
	F[i] is the shortest path from i to the last vertex.
	Transition function:
	F[i] = min[weight + F[j]]
	Base case:
	F[n] = 0
*/
