function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    
    let answer = arr.map(object => {
      let axis = object.avgAlt + earthRadius
      let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(axis ** 3 / GM))
      return {name: object.name,orbitalPeriod: orbitalPeriod}
    })
  
    return answer
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));