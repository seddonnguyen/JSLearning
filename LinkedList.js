function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

const buildLinkList = arr => {
    let head = null;

    for(let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }
    return head;
};

const linkList2Array = head => {
    let res = [];
    while(head != null) {
        res.push(head.val);
        head = head.next;
    }
    return res;
};

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function reverseKGroups(head, k) {

    if(k === 1) {
        return head;
    }

    let current = new LinkedListNode(0, head);
    let start = current;

    const reverse = (prev, curr, end) => {
        let next = null;
        while(curr !== end) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };

    while(current !== null) {
        let n = 0;
        let ptr = current;

        while(ptr.next !== null && n < k) {
            n += 1;
            ptr = ptr.next;
        }

        let next = current.next;
        if(n === k) {
            current.next = reverse(ptr.next, current.next, ptr.next)
        }

        current = next
    }
    return start.next;
}

// let arr = [1,2,3, 4, 5, 6, 7, 8, 9, 10];
// let head = buildLinkList(arr);
//
// console.log(linkList2Array(reverseKGroups(head, 3)));

module.exports = {
    ListNode, buildLinkList, linkList2Array
};