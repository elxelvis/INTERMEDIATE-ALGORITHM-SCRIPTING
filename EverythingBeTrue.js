function truthCheck(collection, pre) {
    let isTrue = collection.every(object => object[pre])
  
    return isTrue 
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));