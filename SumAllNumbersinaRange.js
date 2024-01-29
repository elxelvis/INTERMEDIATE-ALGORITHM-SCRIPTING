function sumAll(arr) {
  
    let array = Array.from({length: Math.max(...arr) - Math.min(...arr) + 1}, (_,index) => Math.min(...arr) + index)
    let summedArray = array.reduce((sum,number) => sum + number)
  
    return summedArray 
  }
  
  console.log(sumAll([4, 1]));