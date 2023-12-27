//Populating Next Right Pointers in Each Node
//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/


// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}


/**
 * @param {Node} root
 * @return {Node}
 */
let connect = root => {
    let curr = root;
    let next = root ? root.left : null;

    while(curr && next) {
        curr.left.next = curr.right;
        if(curr.next) {
            curr.right.next = curr.next.left;
        }

        curr = curr.next
        if(!curr) {
            curr = next;
            next = curr.left;
        }
    }
    return root;
};