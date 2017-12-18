class TrieNode {
    constructor() {
        this.isKey = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.root.isKey = true; // represent the empty string - ''
    }
    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        let chNode;
        for (let ch of word) {
            chNode = node.children.get(ch);
            if (!chNode) {
                chNode = new TrieNode();
                node.children.set(ch, chNode);
            }
            node = chNode;
        }
        if (chNode) {
            chNode.isKey = true;
        }
    }
    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        let chNode;
        for (let ch of word) {
            chNode = node.children.get(ch);
            if (!chNode) {
                return false;
            }
            node = chNode;
        }
        return !chNode || chNode.isKey;
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        let chNode;
        for (let ch of prefix) {
            chNode = node.children.get(ch);
            if (!chNode) {
                return false;
            }
            node = chNode;
        }
        return true;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie;