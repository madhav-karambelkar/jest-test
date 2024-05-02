function sum(a, b) {
  return a + b;
}

function fibonacciSequence(numTerms) {
  if (numTerms <= 0) return [];

  if (numTerms === 1) return [0];

  let sequence = [0, 1];

  while (sequence.length < numTerms) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];

    sequence.push(nextNumber);
  }

  return sequence;
}

function makeCapFirstLetter(a) {
  const [first, rest] = [a.substr(0, 1), a.substr(1, a.length - 1)];
  return first.toUpperCase().concat(rest);
}

function largestDifference(arr) {
  let min = arr[0];

  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    else {
      const diff = arr[i] - min;

      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  return maxDiff;
}

// console.log(fibonacciSequence(3));
// console.log(makeCapFirstLetter("sjasd sadhj"));
// console.log(largestDifference([10,2,1,4,5]))
module.exports = {sum,makeCapFirstLetter,largestDifference};
