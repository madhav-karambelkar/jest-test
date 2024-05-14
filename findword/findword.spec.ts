// Import the function to test
// const countOccurrences = require('./countOccurrences')
import countOccurrences from './findword'

describe('countOccurrences', () => {
  it('should return the correct number of occurrences of a character in a string', () => {
    const targetString = 'importance'

    const tOccurrences = countOccurrences(targetString, 't')
    expect(tOccurrences).toBe(1)

    const xOccurrences = countOccurrences(targetString, 'x')
    expect(xOccurrences).toBe(0)

    const eOccurrences = countOccurrences(targetString, 't')
    expect(eOccurrences).toBe(1)
  })
})
