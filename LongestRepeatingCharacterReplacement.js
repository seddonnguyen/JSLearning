// Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
    let max = 0;
    let count = new Map();
    let l = 0;

    for(let r = 0; r < s.length; r++) {
        count.set(s[r], (count.get(s[r]) ?? 0) + 1);

        while(((r - l + 1) - Math.max(...count.values())) > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l++;
        }

        max = Math.max(max, r - l + 1);
    }
    return max;
};

let s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));