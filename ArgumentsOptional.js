function addTogether() {
    let [a,b] = arguments
  
    function missingArgument(b) {
      return addTogether(a,b)
    }
  
    if (typeof a == 'number') {
      if (typeof b == 'number') {
        return a + b
      }
  
      if (arguments.length == 1) {
        return missingArgument
  
      }
    }
  }
  
  console.log(addTogether(2,3));