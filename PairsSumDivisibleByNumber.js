// Pairs whose sum is divisible by a given number
// (a[i] + a[j]) % k = 0 where i < k
// remainder1 = a[i] % k
// remainder2 = a[j] % k
// (remainder1 + remainder2) = k or (remainder1 + remainder2) = 0
// ==> (remainder1 + remainder2) % k = 0


function solution(a, k) {
    let count = 0;
    let reminder = new Array(k).fill(0);
    for(let n of a) {
        reminder[n % k]++;
    }
    // Let's define n as the count of numbers in an array 'a' that are divisible by k.
    // We want to count the number of pairs where the sum of remainders is equal to zero, (remainder1 + remainder2) = 0.
    // We can choose n ways to select remainder1 and (n - 1) ways to select remainder2.
    // Therefore, there are 'n * (n - 1)' ways to get the sum of remainders as zero.
    // However, we have counted each pair twice because of the commutative property of addition (A + B = B + A).
    // To remove the duplicate count, we divide the result by 2.
    // The total number of unique pairs can be calculated using the formula n(n - 1)/2, where the sum of the remainders is equal to zero.
    let n = reminder[0];
    count += n * (n - 1) / 2;

    let left = 1;
    let right = k - 1;
    while(left < right) {
        // To find the number of ways where the sum of two remainders (remainder1 and remainder2) is equal to a given number k, we can apply the Rule of Product.
        // This rule states that if there are 'a' ways to do one thing and 'b' ways to do another thing, then there are a * b ways to do both things.
        // In this case, if (remainder1 + remainder2) = k,
        // then (the number of ways to select remainder1) * (the number of ways to select remainder2) = the total number of ways where (remainder1 + remainder2) = k.
        count += reminder[left++] * reminder[right--];
    }
    return count;
}


let a = [1, 2, 3, 4, 5];
let k = 3;
console.log(solution(a, k));