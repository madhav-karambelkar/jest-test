const example = require('./Example');

describe("example", () => {
    it("should return an empty object while passing an empty string", () => {
        expect(example()).toStrictEqual({})
    })
    it("should count 1 for one word", () => {
        expect(example('first')).toStrictEqual({first: 1})
    })
    it("should count 2 for two words that are same", () => {
        expect(example('first first')).toStrictEqual({first: 2})
    })
    it("should count 2 for two words that are same and 1 for 1 word that are different", () => {
        expect(example('first first second')).toStrictEqual({first: 2, second: 1})
    })
    it("should avoid number if number is passed along with string", () => {
        expect(example('first first second 22')).toStrictEqual({first: 2, second: 1})
    })
    it("should return lower case keys if user entered upperCase keys", () => {
        expect(example('First Second')).toEqual({first: 1, second: 1})
    })
})