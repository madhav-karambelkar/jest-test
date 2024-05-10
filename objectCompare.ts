// deepObjectComparison.js
// type deepObj = {
//         a: number,
//         b: {
//             c: number,
//             d: Array<number>
//         }
//     };

function deepObjectComparison(obj1: any, obj2: any): boolean {
    // Check if both objects are not null
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    // Check if both objects are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and values are equal recursively
    for (let key of keys1) {
        if (!(key in obj2) || !deepObjectComparison(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export default deepObjectComparison;
