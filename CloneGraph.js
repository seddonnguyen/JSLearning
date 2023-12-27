// https://leetcode.com/problems/clone-graph/
function Node(val = 0) {
    this.val = val;
    this.neighbors = [];
}

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = node => {
    if(!node) return null;

    let oldToNew = new Map();

    function dfs(node) {
        if(oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        let copy = new Node(node.val);
        oldToNew.set(node, copy);

        for(let n of node.neighbors) {
            copy.neighbors.push(dfs(n));
        }
        return copy;
    }

    return dfs(node);
};