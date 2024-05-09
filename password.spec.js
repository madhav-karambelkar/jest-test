const checkPwdStrength = require('./password')

describe('Check for password strength',()=>{
    it('should not be blank',()=>{
        const res =  checkPwdStrength()
        expect(res).toBe("Password must be needed")
    })
    it('should minimum 8 characters required',()=>{
        const res =  checkPwdStrength('abc123')
        expect(res).toBe("Minimum 8 characters require")
    })
    it('should check for weak password',()=>{
        const res =  checkPwdStrength('abcd1234')
        expect(res).toBe('Weak')
    })
    it('should check for medium password',()=>{
        const res =  checkPwdStrength('abcd@123')
        expect(res).toBe('Medium')
    })
    it('should check for strong password',()=>{
        const res =  checkPwdStrength('Abcd@123')
        expect(res).toBe('Strong')
    })
})