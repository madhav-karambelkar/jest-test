const targetString = 'importance'

function countOccurrences(target: any, charToCount: any) {
  const count = target.split('').reduce((acc: any, char: any) => {
    if (char === charToCount) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
  return count
}

const tOccurrences = countOccurrences(targetString, 't')
console.log(`'t' appears ${tOccurrences} times in the target string.`)

export default countOccurrences
