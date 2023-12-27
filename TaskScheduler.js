import {Heap} from 'heap-js';
// https://leetcode.com/problems/task-scheduler/
/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
    const maxHeap = new Heap(Heap.maxComparator);
    const queue = [];
    const freq = new Map();
    let time = 0;

    tasks.forEach(t => freq.set(t, (freq.get(t) ?? 0) + 1));

    for(let f of freq.values()) {
        maxHeap.add(f);
    }

    while(maxHeap.size() > 0 || queue.length > 0) {

        time++;

        if(maxHeap.size() > 0) {
            let current = maxHeap.pop();
            current--;
            if(current > 0) {
                queue.push([current, time + n]);
            }
        }

        if(queue.length > 0 && queue[0][1] === time) {
            let t = queue.shift();
            maxHeap.add(t[0]);
        }
    }
    return time;
};

let tasks = ["A", "A", "A", "B", "B", "B"], n = 2;

console.log(leastInterval(tasks, n))