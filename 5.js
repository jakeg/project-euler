JG.solution(5, () => {
  /* START
  Smallest multiple
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
  END */

  const maxFactor = 20
  // we need to find the smallest set of primes which *every* factor can be made from
  // ie the power set (?)
  // then multiply them together
  const powerSetPrimes = {} // { 2: 3, 7: 1 } for 2 * 2 * 2 * 7
  for (let i = 2; i <= maxFactor; i++) {
    // for each factor, find its full prime factorisation
    const primes = allPrimeFactors(i)
    for (let prime in primes) {
      // add them all to the power set
      if (!powerSetPrimes[prime] || powerSetPrimes[prime] < primes[prime]) {
        powerSetPrimes[prime] = primes[prime]
      }
    }
  }

  // multiply the power set of primes
  let product = 1
  for (let prime in powerSetPrimes) {
    product *= Math.pow(prime, powerSetPrimes[prime])
  }

  // inc all factors, even duplicates - 100 -> [2, 2, 5, 5] (not just [2, 5])
  function allPrimeFactors (num) {
    const primes = findPrimes(num)
    const all = {}
    let remaining = num
    for (let prime of primes) {
      let repeat = true
      while (repeat) {
        if (remaining % prime === 0) {
          remaining /= prime
          if (!all[prime]) all[prime] = 1
          else all[prime]++
        } else {
          repeat = false
        }
      }
    }
    return all
  }

  function findPrimes (num) {
    const factors = findFactors(num)
    const primes = []
    for (let factor of factors) {
      if (isPrime(factor)) primes.push(factor)
    }
    return primes
  }

  function findFactors (num) {
    if (num % 1 !== 0) return [] // must be an int
    const factors = []
    for (let i = num; i > 0; i--) {
      if (num % i === 0) factors.push(i)
    }
    return factors
  }

  function isPrime (num) {
    return findFactors(num).length === 2
  }

  return product
})
