function destroyer(arr,...args) {
  
    let newArr = arr.filter(element => !args.includes(element))
  
    return newArr
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));