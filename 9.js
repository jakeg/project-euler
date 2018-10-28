JG.solution(9, () => {
  /* START
  Special Pythagorean triplet
  Problem 9
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a^2 + b^2 = c^2
  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
  END */

  const target = 1000
  let outerLeftover
  let innerLeftover
  for (let a = 1; a <= target / 3; a++) {
    outerLeftover = target - a
    for (let b = 1; b <= outerLeftover / 2; b++) {
      innerLeftover = target - a - b
      for (let c = 1; c <= innerLeftover; c++) {
        if (a + b + c === target) {
          if (a * a + b * b === c * c) return a * b * c
        }
      }
    }
  }
})
