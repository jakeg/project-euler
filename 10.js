JG.solution(10, function() {
  /* START
  Summation of primes
  Problem 10 
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
  END */
  
  var primes = [2];
  var below = 2000000;
  while (primes[primes.length - 1] < below) {
    primes.push(nextPrime(primes));
  }
  
  var sum = 0;
  for (var i=0; i<primes.length - 1; i++ ) {
    sum += primes[i];
  }
  
  function nextPrime(primes) {
    var test = primes[primes.length - 1];
    // keep testing new numbers to see if they're prime
    var factorFound = true;
    while (factorFound === true) {
      factorFound = false;
      test++;
      for (var prime of primes) {
        if (test % prime === 0) {
          // factor found, so 'test' isn't a new prime
          factorFound = true;
          break;
        }
      }
    }
    return test; // we got out the loop so we're the next prime!
  }
  
  return sum;
  
});