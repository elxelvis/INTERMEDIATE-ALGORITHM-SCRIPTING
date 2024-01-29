const uniteUnique = (...arr) => {
    let combinedArray = arr.flat()
    let uniqueArray = [...new Set(combinedArray)]
  
    return uniqueArray
  }