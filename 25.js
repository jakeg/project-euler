JG.solution(25, () => {
  /* START
    The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
    Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144
    The 12th term, F12, is the first term to contain three digits.

    What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
  END */

  const fib = fibFactory()

  let n = 1
  const maxDigits = 1000 // TODO: replace with 1000

  while (true) {
    if (fib(n).length >= maxDigits) {
      return n
    }
    n++
  }

  function fibFactory () {
    const memory = {}
    return function fib (n) {
      if (memory[n]) return memory[n]
      const res = n < 3 ? [1] : handAdd(fib(n - 1), fib(n - 2))
      memory[n] = res
      return res
    }
  }

  // add 2 numbers, where the numbers are reversed array of numbers
  function handAdd (digits, nDigits) {
    const biggest = digits.length > nDigits.length ? digits : nDigits
    const smallest = digits.length > nDigits.length ? nDigits : digits
    const res = [...biggest] // don't mutate
    let carry = 0
    for (let i = 0; i < res.length; i++) {
      const add = smallest[i] || 0
      res[i] += add + carry
      carry = 0
      if (res[i] > 9) {
        carry = 1
        res[i] -= 10
      }
    }
    if (carry) res.push(carry)
    return res
  }
})
