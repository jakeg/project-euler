JG.solution(2, () => {
  /* START
    Even Fibonacci numbers
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
      1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
  END */
  let tmp
  let previous = 1
  let current = 2
  let count = current
  const max = 4000000
  while (true) {
    tmp = current
    current = previous + current
    previous = tmp
    if (current > max) break
    if (current % 2 === 0) count += current // even only
  }
  return count
})
