class SegmentTree {
    constructor(sum, left, right) {
        this.sum = sum;
        this.left = left;
        this.right = right;
        this.leftTree = null;
        this.rightTree = null;
    }

    static build(numbers, left, right) {
        if(left === right) {
            return new SegmentTree(numbers[left], left, right);
        }
        const mid = Math.floor((left + right) / 2);
        const root = new SegmentTree(0, left, right);
        root.leftTree = SegmentTree.build(numbers, left, mid);
        root.rightTree = SegmentTree.build(numbers, mid + 1, right);
        root.sum = root.left.sum + root.right.sum;
        return root;
    }
}

module.exports = {
    SegmentTree
};