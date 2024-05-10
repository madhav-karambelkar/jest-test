function isPrime(n:number) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes(upTo:number) {
    let primeSum = 0;
    for (let num = 2; num <= upTo; num++) {
        if (isPrime(num)) {
            primeSum += num;
        }
    }
    return primeSum;
}

const upTo = 10;
console.log(sumOfPrimes(upTo));

export {sumOfPrimes}