JG.solution(14, () => {
  /* START
  The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?

  NOTE: Once the chain starts the terms are allowed to go above one million.
  END */

  const max = 1000000
  let longestChain = 0
  let longestChainStartingNum = 0
  const chainLength = chainFactory()
  for (let i = 1; i <= max; i++) {
    const length = chainLength(i)
    if (length > longestChain) {
      longestChain = length
      longestChainStartingNum = i
    }
  }

  // TODO: memoise!
  function chainFactory () {
    // const memory = {}
    return (n) => {
      let length = 1
      while (n > 1) {
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1
        length++
      }
      return length
    }
  }

  return longestChainStartingNum
})
