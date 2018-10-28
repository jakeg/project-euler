JG.solution(5, () => {
  /* START
  Smallest multiple
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
  END */

  let test = 20
  let fail = false
  while (true) {
    fail = false
    for (let i = 1; i <= 20; i++) {
      if (test % i !== 0) {
        fail = true
        break
      }
    }
    if (!fail) break
    else test++
  }

  return test
})
