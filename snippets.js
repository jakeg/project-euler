// subtract int num from a right-to-left array of digits
// TODO: make work for num > 9 and for where answer may be < 1
function handSubtract (digits, num) {
  let i = 0
  let minus = num
  while (true) {
    const leftover = digits[i] - minus
    if (leftover >= 0) {
      digits[i] -= minus
      break
    } else {
      digits[i] += 10 - minus
      minus = 1
      i++
    }
  }
  if (!digits[digits.length - 1]) digits.pop()
  return digits
}

// we use an array of digits as 64bit float isn't enough to count digits
// 943 -> [3, 4, 9]
function factorial (n) {
  if (typeof n === 'number') n = String(n).split('').map(v => Number(v)).reverse()
  if (n.length === 1 && n[0] <= 1) return n.reverse().reduce((acc, v) => acc + v, '') // base case

  // we're going to multiply starting with units and working up
  // like we would by hand, remembering to carry if > 9
  return handMultiply(n, factorial(handSubtract(n, 1))) // n * factorial(n - 1)
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
