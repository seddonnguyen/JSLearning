class SegmentTree {
    constructor(sum, leftIndex, rightIndex) {
        this.sum = sum;
        this.leftIndex = leftIndex;
        this.rightIndex = rightIndex;
        this.leftTree = null;
        this.rightTree = null;
    }

    static build(numbers, leftIndex, rightIndex) {
        if(leftIndex === rightIndex) {
            return new SegmentTree(numbers[leftIndex], leftIndex, rightIndex);
        }

        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const root = new SegmentTree(0, leftIndex, rightIndex);
        root.leftTree = SegmentTree.build(numbers, leftIndex, middleIndex);
        root.rightTree = SegmentTree.build(numbers, middleIndex + 1, rightIndex);
        root.sum = root.leftTree.sum + root.rightTree.sum;
        return root;
    }

    update(index, value) {
        if(this.leftIndex === this.rightIndex) {
            this.sum = value;
            return;
        }

        const middleIndex = Math.floor((this.leftIndex + this.rightIndex) / 2);
        if(index > middleIndex) {
            this.rightTree.update(index, value);
        } else {
            this.leftTree.update(index, value);
        }
        this.sum = this.leftTree.sum + this.rightTree.sum;
    }

    rangeQuery(leftIndex, rightIndex) {
        if(this.leftIndex === leftIndex && this.rightIndex === rightIndex) {
            return this.sum;
        }

        const middleIndex = Math.floor((this.leftIndex + this.rightIndex) / 2);
        if(leftIndex > middleIndex) {
            return this.rightTree.rangeQuery(leftIndex, rightIndex);
        } else if(rightIndex <= middleIndex) {
            return this.leftTree.rangeQuery(leftIndex, rightIndex);
        } else {
            return this.leftTree.rangeQuery(leftIndex, middleIndex) + this.rightTree.rangeQuery(middleIndex + 1, rightIndex);
        }
    }
}

module.exports = {
    SegmentTree
};