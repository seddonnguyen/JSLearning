// Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
import {buildLinkList, linkList2Array, ListNode} from "./LinkedList.js";
import {MinPriorityQueue} from "@datastructures-js/priority-queue";
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
    const queue = new MinPriorityQueue({priority: x => x.val});

    for(const head of lists) {
        if(head) {
            queue.enqueue(head)
        }
    }

    let result = new ListNode()
    const head = result

    while(!queue.isEmpty()) {
        const {val, next} = queue.dequeue().element

        result.next = new ListNode(val)
        result = result.next

        if(next) {
            queue.enqueue(next)
        }
    }

    return head.next
};

let arr = [[1, 4, 5], [1, 3, 4], [2, 6]]
let lists = [];

for(let l of arr) {
    lists.push(buildLinkList(l));
}

let result = mergeKLists(lists);
let linkListArray = linkList2Array(result);
console.log(linkListArray);