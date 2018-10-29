JG.solution(17, () => {
  /* START
  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
  END */

  const namer = wordNames()

  let total = 0
  for (let i = 1; i <= 1000; i++) {
    total += namer(i).join('').length
  }

  function wordNames () {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
    const thousand = 'thousand'
    const joiner = 'and'

    return (num) => {
      const words = []
      const digits = String(num).split('').reverse().map(v => Number(v))

      // thousands
      if (digits.length >= 4) {
        words.push(units[digits[3] - 1]) // eg 'one' for 1
        words.push(thousand)
      }

      // hundreds
      if (digits.length >= 3) {
        if (digits[2]) {
          words.push(units[digits[2] - 1]) // eg 'one' for 1
          words.push(tens[9])
        }
        if (digits[1] || digits[0]) {
          words.push(joiner)
        }
      }

      // tens and units
      if (digits.length >= 2 && digits[1]) {
        if (digits[1] > 1) {
          // 20+ (units will come later)
          words.push(tens[digits[1] - 1])
        } else {
          // 1-20 (we deal with units here too)
          const teens = digits[1] * 10 + digits[0]
          words.push(units[teens - 1])
        }
      }

      if (digits[0]) {
        if (!digits[1] || digits[1] !== 1) {
          words.push(units[digits[0] - 1])
        }
      }

      return words
    }
  }

  return total
})
