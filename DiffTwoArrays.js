function diffArray(arr1, arr2) {
  
    let arr1Filter = arr1.filter(element => !arr2.includes(element))
  
     let arr2Filter = arr2.filter(element => !arr1.includes(element))
     let newArr = arr1Filter.concat(arr2Filter)
  
     return newArr
  }
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));