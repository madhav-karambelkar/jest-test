const checkPwdStrength = require('./password')

describe('Check for password strength',()=>{
    // it('should not be blank',()=>{
    //     const res =  checkPwdStrength()
    //     expect(res).toBe("Password must be needed")
    // })
    // it('should minimum 8 characters required',()=>{
    //     const res =  checkPwdStrength('abc123')
    //     expect(res).toBe("Minimum 8 characters require")
    // })
    // it('should check for weak password',()=>{
    //     const res =  checkPwdStrength('abcd1234')
    //     expect(res).toBe('Weak')
    // })
    // it('should check for medium password',()=>{
    //     const res =  checkPwdStrength('abcd@123') // AVCCD@123
    //     expect(res).toBe('Medium') 
    // })
    // it('should check for strong password',()=>{
    //     const res =  checkPwdStrength('Abcd@123')
    //     expect(res).toBe('Strong')
    // })
    it.each([
        ['', 'Password must be needed'],
        ['abc123', 'Minimum 8 characters require'],
        
    ])("checks password strength for '%s' to be '%s'", (password, expectedOutcome) => {
        const res = checkPwdStrength(password);
        expect(res).toBe(expectedOutcome);
        
    });
    it.each([
        ['abcdefgh', 'Weak'],
        ['ABCDEFGH', 'Weak'],
        ['12345678', 'Weak'],
        ['@#&$#@!&', 'Weak'],
        ['abcd1234', 'Weak'],
        ['abcd@123', 'Medium'],
        ['AVCCD@123', 'Medium'],
        ['Abcd@123', 'Strong'],
    ])("checks password strength for '%s' to be '%s'", (password, expectedOutcome) => {
        const res = checkPwdStrength(password);
        expect(res).toBe(expectedOutcome);
        expect(password.length).toBeGreaterThanOrEqual(8);

    });
})