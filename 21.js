JG.solution(21, () => {
  /* START
    Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

    If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

    For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

    Evaluate the sum of all the amicable numbers under 10000.
  END */

  const below = 10000

  let sum = 0
  for (let a = 1; a < below; a++) {
    const b = divisorSum(a)
    if (b > a) {
      if (divisorSum(b) === a) {
        sum += a + b
      }
    }
  }

  function divisorSum (num) {
    let sum = 0
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i + num / i
      }
    }
    return sum
  }

  return sum
})
