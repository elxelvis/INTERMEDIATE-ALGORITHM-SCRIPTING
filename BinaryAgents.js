function binaryAgent(str) {
    let splitString = str.split(' ')
    let binaryToEnglish = splitString.map(element => String.fromCharCode(parseInt(element,2)))
    let joinString = binaryToEnglish.join('')
  
    return joinString
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));