// https://neetcode.io/courses/advanced-algorithms/18
const maxProfit = (profits, weight, capacity) => {
    const cache = [];
    for(let idx = 0; idx < profits.length; idx++) {
        cache[idx] = [];
        for(let c = 0; c <= capacity; c++) {
            cache[idx][c] = 0;
        }
    }
    for(let c = 0; c <= capacity; c++) {
        if(weight[0] <= c) {
            cache[0][c] = profits[0];
        }
    }
    for(let i = 1; i < profits.length; i++) {
        for(let c = 1; c <= capacity; c++) {
            let skip = cache[i - 1][c];
            let include = c - weight[i] >= 0 ? profits[i] + cache[i - 1][c - weight[i]] : 0;
            cache[i][c] = Math.max(skip, include)
        }
    }
    return cache[profits.length - 1][capacity];
};

const profits = [4, 4, 7, 1];
const weight = [5, 2, 3, 1];
const capacity = 8;
console.log(maxProfit(profits, weight, capacity));