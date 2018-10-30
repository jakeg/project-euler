JG.solution(23, () => {
  /* START
    A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

    A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

    As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

    Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
  END */

  const max = 28123
  const abundant = []
  for (let n = 1; n <= max; n++) {
    const sum = properDivisorsSum(n)
    if (sum > n) {
      abundant.push(n)
    }
  }

  const sumHash = {}
  for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j < abundant.length; j++) {
      const sum = abundant[i] + abundant[j]
      if (sum <= max) sumHash[sum] = true
    }
  }

  let sum = 0
  for (let i = 1; i <= max; i++) {
    if (!sumHash[i]) sum += i
  }

  function properDivisorsSum (num) {
    let sum = 1
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        sum += i
        if (num / i !== i) sum += num / i
      }
    }
    return sum
  }

  return sum
})