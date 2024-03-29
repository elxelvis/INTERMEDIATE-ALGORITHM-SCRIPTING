function sumPrimes(num) {
    let sum = 0
   
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i
      }
    }
    return sum
   }
   
   sumPrimes(10);
   
   function isPrime(number){
     if (number < 2){
       return false
     }
   
     for (let i = 2; i <= Math.sqrt(number); i++){
   
       if (number % i == 0){
         return false
       }
     }
     return true
   }