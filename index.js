function isPrime(n) {
  if (n==2) return true
  if (n %2 == 0 ) return false
  const top = Math.sqrt(n).toFixed(0)
  for (let i=3; i<= top;i+=2) {
    if ( (n % i) == 0 ) return false
  }
  return true
}

function primeSummation(n) {
  let sumOfPrimes = 0 
  for (let i=2; i< n ; i++) {
    sumOfPrimes += (isPrime(i))*i
  }
  // Good luck!
  return sumOfPrimes;
}

primeSummation(2000000);
