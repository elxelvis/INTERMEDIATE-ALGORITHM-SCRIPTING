function smallestCommons([a,b]) {
    let  max = Math.max(a,b);
    let  min = Math.min(a,b)
  
    return leastCommonMultiple(min,max)
  }
  
  console.log(smallestCommons([13,1]));
  
  function leastCommonMultiple(min, max) {
      function range(min, max) {
          var arr = [];
          for (var i = min; i <= max; i++) {
              arr.push(i);
          }
          return arr; 
        } 