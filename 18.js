JG.solution(18, () => {
  /* START
  By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
  END */

  /*
    PLAN
      - by going left or right we exclude far-opposite side
      - but nothing else is excluded
      - so choose left/right based on adding up one far side vs other
      - every time I move, the triangle of possibilities gets smaller
      - also need to check if very next row provides bigger advantage
  */

  const triangle = `
    75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
  `

  const rows = triangle.trim().replace(/ {2,}/g, '').split('\n').map(v => v.split(' ').map(v => Number(v)))

  const bestRoute = []
  const len = rows.length
  for (let i = 0; i < len; i++) {
    bestRoute.push(rows.shift()[0])
    if (rows.length) {
      // acc = -1; acc > 0 so we don't include the first row
      const leftSum = rows.reduce((acc, v) => acc > -1 ? acc + v[0] : 0, -1)
      const rightSum = rows.reduce((acc, v) => acc > -1 ? acc + v[v.length - 1] : 0, -1)
      const nextRowDiff = rows[0][0] - rows[0][1] // positive for left > right
      const sideDiff = leftSum - rightSum // positive for left > right
      const goLeft = sideDiff + nextRowDiff > 0
      console.log(sideDiff, nextRowDiff, sideDiff + nextRowDiff, goLeft ? 'left' : 'right')
      if (goLeft) rows.forEach(row => row.pop()) // go left
      else rows.forEach(row => row.shift()) // go right
    }
  }
  console.log(bestRoute)

  return bestRoute.reduce((acc, v) => acc + v, 0)
})
