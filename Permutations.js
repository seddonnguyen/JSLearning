/**
 * @return {number[][]}
 * @param word
 */

//https://leetcode.com/problems/permutations/description/
const permute = word => {
    let result = [];
    let letters = word.split("");

    if(letters.length === 1) {
        return [[...letters]];
    }
    let length = letters.length;
    for(let i = 0; i < length; i++) {
        let n = letters.shift();
        let perms = permute(letters.join(""));
        for(let p of perms) {
            p.push(n);
        }
        result.push(...perms);
        letters.push(n);
    }
    return result;
};

let nums = "abcde";
let permutations = permute(nums).map(x => x.join(""));
console.log(permutations, permutations.length);