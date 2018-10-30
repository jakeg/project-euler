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
  const maxDigits = 500 // TODO: replace with 1000
  const max = Math.pow(10, maxDigits - 1) // infinity
  if (max === Infinity) return 'max is infinity'
  // console.log(max)
  while (true) {
    if (fib(n) > max) {
      console.log(fib(n))
      return n
    }
    n++
  }

  function fibFactory () {
    const memory = {}
    return function fib (n) {
      if (memory[n]) return memory[n]
      const res = n < 3 ? 1 : fib(n - 1) + fib(n - 2)
      memory[n] = res
      return res
    }
  }
})
