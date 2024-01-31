// Pairs whose sum is divisible by a given number
// (a[i] + a[j]) % k === 0 where i < k
function solution(a, k) {
    let count = 0;
    let reminder = new Array(k).fill(0);
    for(let n of a) {
        let r = n % k;
        if(r === 0) {
            count += reminder[0];
        } else {
            count += reminder[k - r];
        }
        reminder[r]++;
    }
    return count;
}


let a = [1, 2, 3, 4, 5];
let k = 3;
console.log(solution(a, k));