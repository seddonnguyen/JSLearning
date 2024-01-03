// https://leetcode.com/problems/design-add-and-search-words-data-structure/
// leetcode 211. Design Add and Search Words Data Structure
// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.
// word may contain dots '.' where dots can be matched with any letter.
//
// Example:
// Input
//     ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
//     [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
//     [null,null,null,null,false,true,true,true]
//
// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
//
//
// Constraints:
// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.

const {TrieNode} = require('./Trie.js');
const WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    /**
     * @param {string} word
     * @param {TrieNode} node
     * @return {boolean}
     */
    const dfs = (word, node) => {
        let result = false;
        if(word.length === 1) {
            if(word[0] !== ".") {
                return node.children.has(word[0]) && node.children.get(word[0]).endOfWord;
            }
            for(let children of node.children.values()) {
                result ||= children.endOfWord;
            }
        } else if(word[0] === ".") {
            for(let children of node.children.values()) {
                result ||= dfs(word.slice(1), children);
            }
        } else if(!node.children.get(word[0])) {
            return false;
        } else {
            result ||= dfs(word.slice(1), node.children.get(word[0]));
        }
        return result;
    };
    return dfs(word, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True