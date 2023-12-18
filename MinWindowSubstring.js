// Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
    if(t === "") {
        return "";
    }

    let result = [-1, -1];
    let minLength = Infinity;
    let window = new Map();
    let countT = new Map();

    for(let c of t) {
        countT.set(c, (countT.get(c) ?? 0) + 1);
    }

    let have = 0;
    let need = countT.size;
    let l = 0;

    for(let r = 0; r < s.length; r++) {
        let c = s[r];

        if(!countT.has(c)) {
            continue;
        }

        window.set(c, (window.get(c) ?? 0) + 1);

        if(window.get(c) === countT.get(c)) {
            have++;
        }

        while(have === need) {
            if((r - l + 1) < minLength) {
                result = [l, r];
                minLength = r - l + 1;
            }

            let c = s[l];
            if(!countT.has(c)) {
                l++;
                continue;
            }

            let count = window.get(c) - 1;
            window.set(c, count);

            if(count < countT.get(c)) {
                have--;
            }
            l++;
        }
    }
    let [left, right] = result;
    return minLength !== Infinity ? s.slice(left, right + 1) : "";
};

let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t));