JG.solution(20, () => {
  /* START
    n! means n × (n − 1) × ... × 3 × 2 × 1

    For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
    and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

    Find the sum of the digits in the number 100!
  END */

  const res = factorial(100)
  const sum = res.reduce((acc, v) => acc + v, 0)

  // we use an array of digits as 64bit float isn't enough to count digits
  // 943 -> [3, 4, 9]
  function factorial (n) {
    let result = [1]
    for (let i = 1; i <= n; i++) {
      result = handMultiply(result, i)
    }
    return result.reverse()
  }

  // borrowed from #16. multiply an array of digits by a number
  function handMultiply (digits, num) {
    let carry = 0
    for (let i = 0; i < digits.length; i++) {
      const multiplied = String(digits[i] * num + carry).split('')
      digits[i] = Number(multiplied.pop())
      carry = Number(multiplied.join(''))
    }
    if (carry) {
      String(carry).split('').reverse().forEach(v => digits.push(Number(v)))
    }
    return digits
  }

  return sum
})
