class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children.get(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, this.root, 0);
    }

    dfs(word, node, i) {
        if (i === word.length) return node.endOfWord;
    
        const char = word[i];
    
        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.dfs(word, child, i + 1)) return true;
            }
            return false;
        } else {
            if (!node.children.has(char)) return false;
            return this.dfs(word, node.children.get(char), i + 1);
        }
    }
}
