JG.solution(21, () => {
  /* START
    Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

    If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

    For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

    Evaluate the sum of all the amicable numbers under 10000.
  END */

  const below = 10000

  const { divisorSum, memory } = divisorsFactory(below)

  for (let i = 1; i < below; i++) {
    divisorSum(i)
  }

  const reversed = {}
  for (let num in memory) {
    const divisor = memory[num]
    num = Number(num)
    if (divisor !== num) {
      if (!reversed[divisor]) reversed[divisor] = []
      reversed[divisor].push(num)
    }
  }

  const amicables = []
  for (let num in memory) {
    if (reversed[num] && reversed[num].find(v => v === memory[num])) {
      amicables.push(Number(num))
    }
  }

  const sum = amicables.reduce((acc, v) => acc + v, 0)

  function divisorsFactory (below) {
    const memory = {} // memoise

    function divisorSum (num) {
      if (memory[num]) return memory[num]
      const divisors = [1]
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          divisors.push(i)
          divisors.push(num / i)
        }
      }
      const sum = divisors.reduce((acc, v) => acc + v, 0)
      if (sum < below) memory[num] = sum // these won't be amicable as too high
      return sum
    }

    return {
      memory,
      divisorSum
    }
  }

  return sum
})
