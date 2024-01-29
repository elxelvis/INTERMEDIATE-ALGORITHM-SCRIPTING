function convertHTML(str) {
    let htmlPairs = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    let splitString = str.split('')
    let changedElements = splitString.map(element => htmlPairs[element] || element)
    let changedString =  changedElements.join('')
  
    return changedString
  }
  
  console.log(convertHTML("Dolce & Gabbana"));