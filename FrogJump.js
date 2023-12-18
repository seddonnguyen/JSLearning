// Frog Jump
// https://leetcode.com/problems/frog-jump/

/**
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = function(stones) {
    let map = new Map();
    for(let s of stones) {
        map.set(s, new Set());
    }
    map.get(0).add(0);

    for(let stone of stones) {
        let jumps = [...map.get(stone)]
        for(let jump of jumps) {
            for(let jumpDistance of [jump - 1, jump, jump + 1]) {
                if(jumpDistance > 0 && map.has(stone + jumpDistance)) {
                    map.get(stone + jumpDistance).add(jumpDistance);
                }
            }
        }
    }
    let lastStone = stones[stones.length - 1];
    let lastStoneJumps = map.get(lastStone);
    return lastStoneJumps.size > 0;
};

let stones = [0,1,3,5,6,8,12,17];
console.log(canCross(stones));