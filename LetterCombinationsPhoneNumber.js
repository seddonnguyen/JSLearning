// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// LeetCode 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
//
// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const result = [];
    const numberToLetters = new Map();
    numberToLetters.set('2', ['a', 'b', 'c']);
    numberToLetters.set('3', ['d', 'e', 'f']);
    numberToLetters.set('4', ['g', 'h', 'i']);
    numberToLetters.set('5', ['j', 'k', 'l']);
    numberToLetters.set("6", ['m', 'n', 'o']);
    numberToLetters.set('7', ['p', 'q', 'r', 's']);
    numberToLetters.set('8', ['t', 'u', 'v']);
    numberToLetters.set('9', ['w', 'x', 'y', 'z']);
    const dfs = (i, currentString) => {
        if(currentString.length === digits.length) {
            result.push(currentString);
            return;
        }

        const letters = numberToLetters.get(digits.at(i));
        for(let l of letters) {
            dfs(i + 1, currentString + l);
        }
    };
    if(digits.length) {
        dfs(0, "");
    }
    return result;
};

const digits = "2345";
console.log(letterCombinations(digits));