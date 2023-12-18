// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let visited = new Set();
    let max = 0;
    let l = 0;
    for(let r = 0; r < s.length; r++) {
        while(visited.has(s[r])) {
            visited.delete(s[l]);
            l += 1;
        }
        visited.add(s[r]);
        max = Math.max(max, r - l + 1)
    }
    return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));