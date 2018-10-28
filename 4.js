JG.solution(4, () => {
  /* START
  Largest palindrome product
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
  END */

  // const products = {} // TODO: use a hash map and memoise
  function maxPalindromeProduct (digits) {
    let max = 0
    const maxInput = Number('9'.repeat(digits))
    const minInput = Number(`1${'0'.repeat(digits - 1)}`)
    for (let i = maxInput; i >= minInput; i--) {
      for (let j = maxInput; j >= minInput; j--) {
        const product = i * j
        if (isPalindrome(product)) {
          if (product > max) max = product
        }
      }
    }
    return max
  }

  function isPalindrome (str) {
    // first the base case
    str = String(str)
    if (str.length <= 1) return true
    if (str[0] !== str[str.length - 1]) return false
    return isPalindrome(str.slice(1, str.length - 1))
  }

  return maxPalindromeProduct(3)
})
