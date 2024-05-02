function makeCapFirstLetter(a) {
    const [first, rest] = [a.substr(0, 1), a.substr(1, a.length - 1)];
    return first.toUpperCase().concat(rest);
  }

  
  module.exports = makeCapFirstLetter