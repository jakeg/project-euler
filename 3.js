JG.solution(3, () => {
  /* START
  Largest prime factor
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
  END */

  const factors = findFactors(600851475143)

  // TODO: think there's an infinite loop with some numbers still
  // ... or just really inefficent

  function findFactors (num, primes) {
    primes = primes || [2] // first prime number is 2
    const factors = []
    let prime
    let leftovers
    let primeIndex = 0
    while (true) {
      if (primes.length < primeIndex + 1) primes.push(nextPrime(primes))
      prime = primes[primeIndex]
      if (num % prime === 0) {
        if (factors.indexOf(prime) === -1) factors.push(prime)
        leftovers = num / prime // leftovers === 1 means num is prime
        if (leftovers === 1 || primes.indexOf(leftovers) !== -1) {
          if (leftovers !== 1 && factors.indexOf(leftovers) === -1) {
            factors.push(leftovers)
          }
          break // found the last factor, we're done! :D
        } else {
          // factor was found, but not the last one
          num = leftovers
          primeIndex = 0
        }
      } else {
        primeIndex++
      }
    }
    return factors
  }

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

  return factors[factors.length - 1] // largest one only
})
