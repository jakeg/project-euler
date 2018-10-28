JG.solution(7, () => {
  /* START
  10001st prime
  Problem 7
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
  END */

  const nthPrime = 10001
  const primes = [2]
  for (let i = 1; i < nthPrime; i++) {
    primes.push(nextPrime(primes))
  }

  function nextPrime (primes) {
    let test = primes[primes.length - 1]
    // keep testing new numbers to see if they're prime
    let factorFound = true
    while (factorFound === true) {
      factorFound = false
      test++
      for (let prime of primes) {
        if (test % prime === 0) {
          // factor found, so 'test' isn't a new prime
          factorFound = true
          break
        }
      }
    }
    return test // we got out the loop so we're the next prime!
  }

  return primes[nthPrime - 1]
})
