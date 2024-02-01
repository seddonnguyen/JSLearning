// https://www.geeksforgeeks.org/count-pairs-in-array-whose-sum-is-divisible-by-k/
// Pairs whose sum is divisible by a given number
// (a[i] + a[j]) % k = 0 where i < k
// remainder1 = a[i] % k
// remainder2 = a[j] % k
// remainder1 + remainder2 = k or remainder1 + remainder2 = 0
// ==> (remainder1 + remainder2) % k = 0

function solution(a, k) {
    let count = 0;
    let reminder = new Array(k).fill(0);
    for(let n of a) {
        reminder[n % k]++;
    }
    // i < j
    // remainder1 = a[i] % k
    // remainder2 = a[j] % k
    // remainder1 = remainder2 = 0
    // remainder1 + remainder2 = 0

    // We want to count the number of unique sum of remainders is equal to 0, remainder1 + remainder2 = 0.
    // Let's define n as the count of numbers in an array 'a' that are divisible by k.
    // We can choose n ways to select remainder1 and (n - 1) ways to select remainder2.
    // Therefore, there are 'n * (n - 1)' ways to get the sum of remainders as zero.
    // However, we have counted each sum twice because of the commutative property of addition (remainder1 + remainder2 = remainder2 + remainder1).
    // To remove the duplicate count, we divide the result by 2.
    // The number of unique sum of remainders can be calculated using n(n - 1)/2 when both remainders are equal.
    let n = reminder[0];
    count += n * (n - 1) / 2;

    let left = 1;
    let right = k - 1;
    while(left < right) {
        // i < j
        // remainder1 = a[i] % k
        // remainder2 = a[j] % k
        // remainder1 != remainder2
        // remainder1 + remainder2 = k

        // To find the number of ways to select remainder1 + remainder2 = k where remainder1 != remainder2, we can apply the Rule of Product.
        // This rule states that if there are 'a' ways to do one thing and 'b' ways to do another thing, then there are a * b ways to do both things.
        // In this case, (the number of ways to select remainder1) * (the number of ways to select remainder2) = the total number of ways to select remainder1 + remainder2 = k.
        count += reminder[left++] * reminder[right--];
    }

    // i < j
    // remainder1 = a[i] % k
    // remainder2 = a[j] % k
    // remainder1 = remainder2 = k/2
    // remainder1 + remainder2 = k

    // When k is an even number and both remainders (remainder1 and remainder2) are equal to k/2,
    // we can calculate the number of distinct pairs whose sum of remainders is equal to k, remainder1 + remainder2 = k.
    // If both remainders are equal, you can find the number of unique sum of remainders by using the formula n(n-1)/2.
    if(k % 2 === 0) {
        let n = reminder[k / 2];
        count += n * (n - 1) / 2;
    }
    return count;
}


let a1 = [2, 2, 1, 7, 5, 3];
let k1 = 4;
console.log(solution(a1, k1));

let a2 = [5, 9, 36, 74, 52, 31, 42];
let k2 = 3;
console.log(solution(a2, k2));