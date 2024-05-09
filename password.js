const checkPwdStrength = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let strength = 0;
    if(!password){
        return 'Password must be needed';
    }
    if (password && password.length >= minLength) {
        strength++;
        if (hasUpperCase && hasLowerCase) {
            strength++;
        }
        if (hasNumbers) {
            strength++;
        }
        if (hasSpecialChars) {
            strength++;
        }
        return strength === 3 ? "Medium" : strength === 4 ? "Strong" : "Weak";
    }
    return 'Minimum 8 characters require';
}

// console.log(checkPwdStrength())

module.exports =  checkPwdStrength