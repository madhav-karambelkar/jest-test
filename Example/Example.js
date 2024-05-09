function splitString(d) {
  if (d) return d.match(/[^ ]+/g);
  else return [];
}

function example(stringData) {
  // let wordList = splitString(stringData) ?? []
  // let result = {}
  // if(wordList.length > 0 ){
  //     console.log("sksksks")
  //     result[wordList[0]] = 1
  // }
  // if(wordList.length > 1 ){
  //     result[wordList[1]] = 2
  // }

  // return result

  //   let wordList = splitString(stringData) ?? [];
  //   let result = {};

  //   wordList.forEach((element) => {
  //     result[element] = result[element] + 1 || 1;
  //   });

  // return resultstringData

  let l = false
  if(false){
    return "Something"
  }

  return (splitString(stringData))
    .filter((item) => isNaN(item))
    .reduce((curr, next) => {
    let key = next?.toLowerCase()
      curr[key] = curr[key] + 1 || 1;
      return curr;
    }, {});
}

module.exports = example;
