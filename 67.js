JG.solution(67, () => {
  /* START
  By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

  3
  7 4
  2 4 6
  8 5 9 3

  That is, 3 + 7 + 4 + 9 = 23.

  Find the maximum total from top to bottom of the triangle below:

  [not shown here]
  END */

  const triangle = JG['67-triangle']

  const rows = triangle.trim().replace(/ {2,}/g, '').split('\n').map(v => v.split(' ').map(v => Number(v)))

  while (rows.length >= 2) {
    const row = rows[rows.length - 2] // start at penultimate row
    const bottomRow = rows[rows.length - 1]
    for (let i = 0; i < row.length; i++) {
      // add to each number in penultimate row the max of 2 options below
      row[i] += Math.max(bottomRow[i], bottomRow[i + 1])
    }
    rows.pop() // remove the now deprecated bottom row
  }

  return rows[0][0]
}, '67-triangle.js')
