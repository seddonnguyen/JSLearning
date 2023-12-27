// Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/

function TrieNode() {
    this.children = new Map();
    this.endOfWord = false;
}

const Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    for(let c of word) {
        if(!currentNode.children.has(c)) {
            currentNode.children.set(c, new TrieNode());
        }
        currentNode = currentNode.children.get(c);
    }
    currentNode.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    for(let c of word) {
        if(!currentNode.children.get(c)) {
            return false;
        }
        currentNode = currentNode.children.get(c);
    }
    return currentNode.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for(let c of prefix) {
        if(!currentNode.children.get(c)) {
            return false;
        }
        currentNode = currentNode.children.get(c);
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */