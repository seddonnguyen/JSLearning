function UnionFind(n) {
    const parent = [0];
    const rank = [1];

    for(let i = 1; i <= n; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    this.find = n => {
        let p = parent[n];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };

    /**
     * @param {number} n1
     * @param {number} n2
     * @return {boolean}
     */
    this.union = (n1, n2) => {
        let p1 = this.find(n1);
        let p2 = this.find(n2);

        if(p1 === p2) {
            return false;
        }

        if(rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    };
}

module.exports = {
    UnionFind
};