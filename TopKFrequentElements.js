const topKFrequent = function(nums, k) {
    let map = new Map(), res = [];

    for(let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    let tmp = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for(let i = 0; i < k && i < tmp.length; i++) {
        res.push(tmp[i][0])
    }
    return res;
};

let nums = [1, 1, 1, 2, 2, 3], k = 2;
console.log(topKFrequent(nums, k));