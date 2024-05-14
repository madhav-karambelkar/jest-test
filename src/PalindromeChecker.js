// src/PalindromeChecker.js

import React, { useState } from 'react';

function isPalindrome(s) {
  s = s.replace(/\s/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
}

function PalindromeChecker() {
  const [input, setInput] = useState('');
  const [isPalindromeResult, setIsPalindromeResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckPalindrome = () => {
    const result = isPalindrome(input);
    setIsPalindromeResult(result);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a string..."
      />
      <button onClick={handleCheckPalindrome}>Check Palindrome</button>
      {isPalindromeResult !== null && (
        <p data-testid="result">
          {isPalindromeResult ? 'It is a palindrome!' : 'It is not a palindrome.'}
        </p>
      )}
    </div>
  );
}

export default PalindromeChecker;
