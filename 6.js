JG.solution(6, function() {
  /* START
  Sum square difference
  Problem 6 
  The sum of the squares of the first ten natural numbers is,
    1^2 + 2^2 + ... + 10^2 = 385
  The square of the sum of the first ten natural numbers is,
    (1 + 2 + ... + 10)^2 = 55^2 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
  END */
  
  var sumOfSquares = 0;
  var sum = 0;
  var squareOfSums = 0;
  var min = 1;
  var max = 100;
  for (var i=min; i<=max; i++) {
    sumOfSquares += i*i;
    sum += i;
  }
  squareOfSums = sum*sum;
  
  return squareOfSums - sumOfSquares;
});