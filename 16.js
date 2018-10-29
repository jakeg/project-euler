JG.solution(16, () => {
  /* START
  2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2<sup>1000</sup>?
  END */

  function powerDigits (base, power) {
    // uses array as 64bit float isn't enough; left to right
    const digits = [1]
    for (let pow = 1; pow <= power; pow++) {
      // we're going to multiply each digit by the base
      // like paper long addition, carrying numbers across
      let carry = 0
      for (let i = 0; i < digits.length; i++) {
        const multiplied = String(digits[i] * base + carry).split('')
        digits[i] = Number(multiplied.pop())
        carry = Number(multiplied.join(''))
      }
      if (carry) {
        // would be simpler if just base 2 but making this work to any base
        String(carry).split('').reverse().forEach(v => digits.push(Number(v)))
      }
    }
    return digits
  }

  const sum = powerDigits(2, 1000).reduce((acc, v) => acc + v, 0)

  return sum
})
