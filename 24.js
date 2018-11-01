JG.solution(24, () => {
  /* START
    A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

    012   021   102   120   201   210

    What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
  END */

  // take all permutations of n-1 and slot the new number in each position, from right to left

  let items = []
  const max = 9
  for (let i = 0; i <= max; i++) {
    items = permutations(items, String(i))
  }

  function permutations (previous, newChar) {
    if (!previous.length) return [newChar]
    const output = []
    for (let i = 0; i <= previous.length - 1; i++) {
      for (let j = previous[i].length; j >= 0; j--) {
        let item = previous[i].split('')
        item.splice(j, 0, newChar)
        output.push(item.join(''))
      }
    }
    return output
  }

  items.sort()

  return items[999999]
})
