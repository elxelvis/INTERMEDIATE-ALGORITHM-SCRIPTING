function pairElement(str) {
    let dnaPairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    }
    let dnaArray = str.split('')
    let pairedDNA = dnaArray.map(element => [element,dnaPairs[element]])
    
    return pairedDNA
    }
    
    pairElement("GCG");