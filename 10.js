JG.solution(10, () => {
  /* START
  Summation of primes
  Problem 10
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
  END */

  // adapted from #7
  function allPrimesBelow (below) {
    const primes = []
    const listEnd = below - 1

    // create our seive
    const sieve = []
    for (let i = 2; i <= listEnd; i++) {
      sieve.push(false)
    }

    for (let i = 0; i < sieve.length; i++) {
      const num = i + 2 // 1st element is 2
      if (!sieve[i]) {
        // num is a prime!
        primes.push(num)
        for (let j = num * 2; j <= listEnd; j += num) {
          // won't be a prime as has this prime as a factor
          sieve[j - 2] = true // our array starts with num 2
        }
      }
    }

    return primes
  }

  const primes = allPrimesBelow(2000000)
  const sum = primes.reduce((acc, v) => acc + v)

  return sum
})
