JG.solution(7, () => {
  /* START
  10001st prime
  Problem 7
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
  END */

  // using the 'sieve of eratosthenes' https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

  // we will create a list then starting with 2 mark on that list 2 and all multiples of it
  // then every time we find a non-marked number, that's a prime
  // if our list isn't long enough, we double it and start again

  function nthPrime (n) {
    let listEnd = 1000 // we will double this every time we can't find it
    while (true) {
      // create our seive
      const sieve = {}
      for (let i = 2; i <= listEnd; i++) {
        sieve[i] = false
      }

      for (let num in sieve) {
        num = Number(num)
        if (!sieve[num]) {
          // num is a prime!
          for (let i = num * 2; i <= listEnd; i += num) {
            sieve[i] = true // won't be a prime as has this prime as a factor
          }
        }
      }

      const primes = Object.keys(sieve).filter(v => !sieve[v]).map(v => Number(v))
      const nthPrime = primes[n]
      if (nthPrime) return nthPrime
      else listEnd *= 2
    }
  }

  return nthPrime(10001)
})
