const gridTraverse = (m, n) => {

    // fills 2d array with all zeroes
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));


    // set position to 1
  table[1][1] = 1;


  // loops through to add current to downand right neighbor

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};



// Tab recipe

// visualize problem as a table
// size the table based on inputs
// initialize the table with default values
// seed the trivial answer into the table
// iterate through table
// fill further positions based on the current position