// Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
const {buildLinkList, linkList2Array, ListNode} = require("./LinkedList.js");
const {Heap} = require("heap-js");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    const minHeap = new Heap((a, b) => a.val - b.val);

    for(const head of lists) {
        if(head) {
            minHeap.push(head)
        }
    }

    let result = new ListNode();
    const head = result;

    while(!minHeap.isEmpty()) {
        const {val, next} = minHeap.pop();

        result.next = new ListNode(val);
        result = result.next;

        if(next) {
            minHeap.push(next)
        }
    }
    return head.next
};

let arr = [[1, 4, 5], [1, 3, 4], [2, 6]];
let lists = [];

for(let l of arr) {
    lists.push(buildLinkList(l));
}

let result = mergeKLists(lists);
console.log(linkList2Array(result));