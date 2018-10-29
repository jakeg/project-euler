JG.solution(15, () => {
  /* START
  Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  [pic]

  How many such routes are there through a 20×20 grid?
  END */

  /*
    - get to half way on each route then square and add together
    - paths to half way:
        [1]
        [1, 1]        n=1
        [1, 2, 1]     n=2
        [1, 3, 3, 1]  n=3
    ... then square each of them and add together
  */

  const gridSize = 20
  let paths = [1]
  for (let n = 1; n <= gridSize; n++) {
    const newPaths = []
    for (let i = 0; i <= paths.length; i++) {
      // add together the (up to) 2 points that we can get here from
      newPaths.push((i ? paths[i - 1] : 0) + (i < paths.length ? paths[i] : 0))
    }
    paths = newPaths
  }
  const result = paths.reduce((acc, v) => acc + Math.pow(v, 2))

  return result
})
