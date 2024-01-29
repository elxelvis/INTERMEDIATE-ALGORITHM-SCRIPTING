const translatePigLatin = str => {
    let ifVowelFirst = str.replace(/^[aeiou]\w*/,'$&way')
    let ifConsonantOrVowelFirst = ifVowelFirst.replace(/(^[^aeiou]+)(\w*)/,'$2$1ay')
  
    return ifConsonantOrVowelFirst
  }