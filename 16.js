JG.solution(16, () => {
  /* START
  2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2<sup>1000</sup>?
  END */

  const max = 1000
  const digits = [1] // use an array as 64bit float isn't enough; left to right
  for (let pow = 1; pow <= max; pow++) {
    // we're going to multiply each digit by 2
    // like on paper with long addition, carrying numbers across
    let carry = 0
    for (let i = 0; i < digits.length; i++) {
      const double = String(digits[i] * 2 + carry).split('')
      digits[i] = Number(double.pop())
      carry = Number(double.join(''))
    }
    if (carry) {
      // would be simpler if just base 2 but makign this work to any base
      String(carry).split('').reverse().forEach(v => digits.push(Number(v)))
    }
  }

  const sum = digits.reduce((acc, v) => acc + v, 0)

  return sum
})
