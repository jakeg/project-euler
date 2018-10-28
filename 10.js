JG.solution(10, () => {
  /* START
  Summation of primes
  Problem 10
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
  END */

  const primes = [2]
  const below = 2000000 // 2000000

  while (true) {
    const prime = nextPrime(primes)
    if (prime && prime < below) primes.push(prime)
    else break
  }

  const sum = primes.reduce((acc, v) => acc + v)

  function nextPrime (primes) {
    let test = primes[primes.length - 1]
    // keep testing new numbers to see if they're prime
    let factorFound = true
    while (factorFound === true) {
      factorFound = false
      test++
      const sqrt = Math.sqrt(test) // no point testing numbers bigger than the sqrt
      for (let prime of primes) {
        if (prime > sqrt) break
        if (test % prime === 0) {
          // factor found, so 'test' isn't a new prime
          factorFound = true
          break
        }
      }
    }
    return test // we got out the loop so we're the next prime!
  }

  return sum
})
