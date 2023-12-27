// Remove Duplicate Letters
// https://leetcode.com/problems/remove-duplicate-letters/

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
    let freq = new Map();
    let visited = new Set();
    let res = [];
    s.split("").forEach(c => freq.set(c, (freq.get(c) ?? 0) + 1));
    for(let c of s) {
        if(visited.has(c)) {
            freq.set(c, freq.get(c) - 1);
        } else {
            let lastChar = res[res.length - 1]
            while(res.length > 0 && lastChar > c && freq.get(lastChar) > 0) {
                visited.delete(res.pop());
            }
            res.push(c);
            visited.add(c);
            freq.set(c, freq.get(c) - 1);
        }
    }
    return res.join("");
};

let s = "cbacdcbc"
console.log(removeDuplicateLetters(s));