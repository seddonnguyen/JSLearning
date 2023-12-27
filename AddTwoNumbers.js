// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/
const {buildLinkList, linkList2Array, ListNode} = require("./LinkedList.js");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while(l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        current.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        current = current.next;
        if(l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
};

let arr1 = [2, 4, 3];
let arr2 = [5, 6, 4];
let l1 = buildLinkList(arr1);
let l2 = buildLinkList(arr2);
let linkList = linkList2Array(addTwoNumbers(l1, l2));
console.log(linkList);