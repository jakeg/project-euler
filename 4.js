JG.solution(4, function() {
  /* START
  Largest palindrome product
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
  END */
  
  // TODO: make more efficient
  
  var product;
  var max = 0;
  for (var i=999; i>=100; i--) {
    for (var j=999; j>=100; j--) {
      product = i*j;
      if (parseInt(('' + product).split('').reverse().join(''), 10) === product) {
        if (product > max) max = product;
      }
    }
  }
  
  return max;
});